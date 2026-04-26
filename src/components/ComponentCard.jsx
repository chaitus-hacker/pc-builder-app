import { motion } from 'framer-motion'
import { ExternalLink, TrendingDown } from 'lucide-react'

const amzLink = (n) => `https://www.amazon.in/s?k=${encodeURIComponent(n)}`
const fkLink  = (n) => `https://www.flipkart.com/search?q=${encodeURIComponent(n)}`

export default function ComponentCard({ component }) {
  const lowest = Math.min(component.price.amazon, component.price.flipkart)
  const lowestStore = component.price.amazon <= component.price.flipkart ? 'Amazon' : 'Flipkart'
  const amazonUrl   = component.links?.amazon   || amzLink(component.name)
  const flipkartUrl = component.links?.flipkart  || fkLink(component.name)

  return (
    <motion.div whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(245,200,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ padding: 20, borderRadius: 14, background: '#ffffff', border: component.best ? '2px solid #f5c800' : '2px solid #f3f4f6', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s' }}>

      {component.best && (
        <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 10, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '3px 10px', borderRadius: 20, letterSpacing: '0.5px' }}>
          BEST VALUE
        </div>
      )}

      <div style={{ fontSize: 28, marginBottom: 10 }}>{component.img || '🔲'}</div>
      <h3 style={{ fontSize: 14, fontWeight: 800, color: '#1a1a1a', marginBottom: 6, paddingRight: component.best ? 80 : 0 }}>{component.name}</h3>
      <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5, marginBottom: 14 }}>
        {typeof component.specs === 'string' ? component.specs : JSON.stringify(component.specs)}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>Amazon</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: component.price.amazon === lowest ? '#16a34a' : '#6b7280' }}>
          {component.price.amazon === 0 ? 'Included' : `₹${component.price.amazon.toLocaleString('en-IN')}`}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>Flipkart</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: component.price.flipkart === lowest ? '#16a34a' : '#6b7280' }}>
          {component.price.flipkart === 0 ? 'Included' : `₹${component.price.flipkart.toLocaleString('en-IN')}`}
        </span>
      </div>

      {lowest > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 14, padding: '6px 10px', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
          <TrendingDown size={12} color="#16a34a" />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a' }}>Best: ₹{lowest.toLocaleString('en-IN')} on {lowestStore}</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
          href={amazonUrl} target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, padding: '11px', borderRadius: 9, background: '#ff9900', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 800, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, boxShadow: '0 2px 8px rgba(255,153,0,0.3)' }}>
          Amazon <ExternalLink size={11} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
          href={flipkartUrl} target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, padding: '11px', borderRadius: 9, background: '#2874f0', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 800, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, boxShadow: '0 2px 8px rgba(40,116,240,0.3)' }}>
          Flipkart <ExternalLink size={11} />
        </motion.a>
      </div>
    </motion.div>
  )
}
