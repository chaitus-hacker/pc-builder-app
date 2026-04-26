import { motion } from 'framer-motion'
import { ExternalLink, TrendingDown, Monitor, Cpu, HardDrive, Zap } from 'lucide-react'

const amzLink = (n) => `https://www.amazon.in/s?k=${encodeURIComponent(n)}`
const fkLink  = (n) => `https://www.flipkart.com/search?q=${encodeURIComponent(n)}`

export default function LaptopCard({ laptop }) {
  const lowest = Math.min(laptop.price.amazon, laptop.price.flipkart)
  const lowestStore = laptop.price.amazon <= laptop.price.flipkart ? 'Amazon' : 'Flipkart'
  const amazonUrl   = laptop.links?.amazon   || amzLink(laptop.name)
  const flipkartUrl = laptop.links?.flipkart  || fkLink(laptop.name)

  return (
    <motion.div whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(245,200,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ padding: 24, borderRadius: 14, background: '#ffffff', border: laptop.best ? '2px solid #f5c800' : '2px solid #f3f4f6', position: 'relative', overflow: 'hidden' }}>

      {laptop.best && (
        <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '3px 10px', borderRadius: 20, letterSpacing: '0.5px' }}>
          TOP PICK
        </div>
      )}

      <div style={{ fontSize: 40, marginBottom: 12, textAlign: 'center' }}>💻</div>
      <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a', marginBottom: 16, textAlign: 'center' }}>{laptop.name}</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        {[
          { icon: <Cpu size={12} />, label: 'CPU', val: laptop.specs.cpu },
          { icon: <Zap size={12} />, label: 'RAM', val: laptop.specs.ram },
          { icon: <Monitor size={12} />, label: 'GPU', val: laptop.specs.gpu },
          { icon: <HardDrive size={12} />, label: 'Storage', val: laptop.specs.storage },
        ].map(s => (
          <div key={s.label} style={{ background: '#f9fafb', borderRadius: 8, padding: '8px 10px', border: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#d4a900', marginBottom: 3 }}>
              {s.icon}
              <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</span>
            </div>
            <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.4 }}>{s.val}</p>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff9d6', borderRadius: 8, padding: '8px 12px', marginBottom: 14, fontSize: 12, color: '#6b7280', border: '1px solid #f5c800' }}>
        🖥️ {laptop.specs.display}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>🛒 Amazon</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: laptop.price.amazon === lowest ? '#16a34a' : '#6b7280' }}>₹{laptop.price.amazon.toLocaleString('en-IN')}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>🛒 Flipkart</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: laptop.price.flipkart === lowest ? '#16a34a' : '#6b7280' }}>₹{laptop.price.flipkart.toLocaleString('en-IN')}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 16, padding: '6px 10px', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
        <TrendingDown size={12} color="#16a34a" />
        <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a' }}>Best: ₹{lowest.toLocaleString('en-IN')} on {lowestStore}</span>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          href={amazonUrl} target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, padding: '13px', borderRadius: 10, background: '#ff9900', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 800, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 3px 10px rgba(255,153,0,0.3)' }}>
          Amazon <ExternalLink size={13} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          href={flipkartUrl} target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, padding: '13px', borderRadius: 10, background: '#2874f0', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 800, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 3px 10px rgba(40,116,240,0.3)' }}>
          Flipkart <ExternalLink size={13} />
        </motion.a>
      </div>
    </motion.div>
  )
}
