import { motion } from 'framer-motion'

export default function BudgetSlider({ value, onChange, min = 10000, max = 300000, step = 5000, label = 'Budget' }) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <label style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{label}</label>
        <motion.span key={value} initial={{ scale: 1.15 }} animate={{ scale: 1 }}
          style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', color: '#1a1a1a' }}>
          ₹{value.toLocaleString('en-IN')}
        </motion.span>
      </div>

      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))} style={{ width: '100%' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        {[min, Math.round((min + max) / 2), max].map(v => (
          <span key={v} style={{ fontSize: 11, color: '#9ca3af' }}>₹{(v / 1000).toFixed(0)}K</span>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        {pct < 33 && <span style={{ fontSize: 11, background: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: 20, fontWeight: 700, border: '1px solid #bbf7d0' }}>💚 BUDGET BUILD</span>}
        {pct >= 33 && pct < 66 && <span style={{ fontSize: 11, background: '#fff9d6', color: '#d4a900', padding: '4px 12px', borderRadius: 20, fontWeight: 700, border: '1px solid #f5c800' }}>⭐ MID-RANGE BUILD</span>}
        {pct >= 66 && <span style={{ fontSize: 11, background: '#fef3c7', color: '#d97706', padding: '4px 12px', borderRadius: 20, fontWeight: 700, border: '1px solid #fbbf24' }}>🏆 HIGH-END BUILD</span>}
      </div>
    </div>
  )
}
