import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, TrendingDown } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { cpuData, gpuData, laptopData } from '../data/components'

const allCPUs    = Object.values(cpuData).flatMap(p => Object.values(p).flat())
const allGPUs    = Object.values(gpuData).flatMap(p => Object.values(p).flat())
const allLaptops = Object.values(laptopData).flatMap(p => Object.values(p).flat())

const categories = [
  { id: 'cpu',    label: 'CPUs',    items: allCPUs },
  { id: 'gpu',    label: 'GPUs',    items: allGPUs },
  { id: 'laptop', label: 'Laptops', items: allLaptops },
]

export default function ComparePage() {
  const [category, setCategory] = useState('cpu')
  const [selected, setSelected] = useState([])
  const cat = categories.find(c => c.id === category)
  const items = cat?.items || []
  const addItem = (item) => { if (selected.length >= 3 || selected.find(s => s.name === item.name)) return; setSelected([...selected, item]) }
  const removeItem = (name) => setSelected(selected.filter(s => s.name !== name))
  const lowest = (item) => Math.min(item.price.amazon, item.price.flipkart)

  return (
    <PageWrapper>
      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#fffef7', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 14px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14 }}>TOOLS</span>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-2px' }}>COMPARE PRODUCTS.</h1>
            <p style={{ fontSize: 15, color: '#9ca3af', marginTop: 8 }}>Select up to 3 products to compare side by side</p>
          </motion.div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
            {categories.map(c => (
              <motion.button key={c.id} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => { setCategory(c.id); setSelected([]) }}
                style={{ padding: '13px 28px', borderRadius: 10, border: '2px solid', cursor: 'pointer', fontSize: 14, fontWeight: 800, transition: 'all 0.2s', letterSpacing: '0.3px', borderColor: category === c.id ? '#f5c800' : '#e5e7eb', background: category === c.id ? '#f5c800' : 'white', color: '#1a1a1a', boxShadow: category === c.id ? '0 4px 14px rgba(245,200,0,0.3)' : 'none' }}>
                {c.label}
              </motion.button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20 }}>
            {/* Picker */}
            <div style={{ padding: 18, borderRadius: 14, background: '#ffffff', border: '2px solid #f3f4f6', height: 'fit-content' }}>
              <h3 style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14 }}>
                SELECT {cat?.label.toUpperCase()} ({selected.length}/3)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 500, overflowY: 'auto' }}>
                {items.map((item, i) => {
                  const isSel = selected.find(s => s.name === item.name)
                  return (
                    <motion.button key={i} whileHover={{ background: '#fff9d6' }}
                      onClick={() => isSel ? removeItem(item.name) : addItem(item)}
                      style={{ padding: '10px 12px', borderRadius: 8, border: '2px solid', cursor: 'pointer', textAlign: 'left', borderColor: isSel ? '#f5c800' : '#f3f4f6', background: isSel ? '#fff9d6' : '#f9fafb', transition: 'all 0.2s' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>₹{lowest(item).toLocaleString('en-IN')}</div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Table */}
            <div>
              {selected.length === 0 ? (
                <div style={{ padding: 60, borderRadius: 14, textAlign: 'center', background: '#ffffff', border: '2px solid #f3f4f6' }}>
                  <div style={{ fontSize: 48, marginBottom: 14 }}>⚖️</div>
                  <p style={{ fontSize: 15, color: '#9ca3af' }}>Select products from the left to compare</p>
                </div>
              ) : (
                <div style={{ padding: 24, borderRadius: 14, background: '#ffffff', border: '2px solid #f3f4f6', overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: 11, color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', width: 110 }}>Attribute</th>
                        {selected.map(item => (
                          <th key={item.name} style={{ padding: '10px 12px', textAlign: 'center', minWidth: 180 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                              <span style={{ fontSize: 13, fontWeight: 800, color: '#1a1a1a' }}>{item.name}</span>
                              {item.best && <span style={{ fontSize: 9, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '2px 8px', borderRadius: 20 }}>BEST VALUE</span>}
                              <button onClick={() => removeItem(item.name)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}><X size={13} /></button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <CompRow label="Specs" values={selected.map(i => typeof i.specs === 'string' ? i.specs : Object.entries(i.specs).map(([k,v]) => `${k}: ${v}`).join(' | '))} />
                      <CompRow label="Amazon" values={selected.map(i => `₹${i.price.amazon.toLocaleString('en-IN')}`)} highlight={selected.map(i => i.price.amazon === Math.min(...selected.map(s => s.price.amazon)))} />
                      <CompRow label="Flipkart" values={selected.map(i => `₹${i.price.flipkart.toLocaleString('en-IN')}`)} highlight={selected.map(i => i.price.flipkart === Math.min(...selected.map(s => s.price.flipkart)))} />
                      <CompRow label="Best Price" values={selected.map(i => `₹${lowest(i).toLocaleString('en-IN')}`)} highlight={selected.map(i => lowest(i) === Math.min(...selected.map(s => lowest(s))))} icon={<TrendingDown size={11} />} />
                    </tbody>
                  </table>

                  <div style={{ display: 'grid', gridTemplateColumns: `110px ${selected.map(() => '1fr').join(' ')}`, gap: 10, marginTop: 18 }}>
                    <div />
                    {selected.map(item => (
                      <div key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <a href={item.links?.amazon || `https://www.amazon.in/s?k=${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer"
                          style={{ padding: '11px', borderRadius: 9, background: '#ff9900', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 800, textAlign: 'center', boxShadow: '0 2px 8px rgba(255,153,0,0.3)' }}>Amazon ↗</a>
                        <a href={item.links?.flipkart || `https://www.flipkart.com/search?q=${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer"
                          style={{ padding: '11px', borderRadius: 9, background: '#2874f0', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 800, textAlign: 'center', boxShadow: '0 2px 8px rgba(40,116,240,0.3)' }}>Flipkart ↗</a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

function CompRow({ label, values, highlight = [], icon }) {
  return (
    <tr style={{ borderTop: '1px solid #f3f4f6' }}>
      <td style={{ padding: '11px 12px', fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</td>
      {values.map((v, i) => (
        <td key={i} style={{ padding: '11px 12px', textAlign: 'center', fontSize: 13, color: highlight[i] ? '#16a34a' : '#6b7280', fontWeight: highlight[i] ? 800 : 500, background: highlight[i] ? '#f0fdf4' : 'transparent' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            {highlight[i] && icon}{v}
          </div>
        </td>
      ))}
    </tr>
  )
}
