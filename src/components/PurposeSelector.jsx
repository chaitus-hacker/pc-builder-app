import { motion } from 'framer-motion'

const purposes = [
  { id: 'gaming',   label: 'Gaming',   icon: '🎮', desc: 'High FPS, max graphics' },
  { id: 'editing',  label: 'Editing',  icon: '🎨', desc: 'Video, photo, 3D work' },
  { id: 'studying', label: 'Studying', icon: '📚', desc: 'Everyday learning tasks' },
  { id: 'office',   label: 'Office',   icon: '💼', desc: 'Productivity & work' },
]

export default function PurposeSelector({ value, onChange }) {
  return (
    <div>
      <label style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>
        Primary Purpose
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {purposes.map(p => (
          <motion.button key={p.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => onChange(p.id)}
            style={{
              padding: '16px 14px', borderRadius: 12, border: 'none', cursor: 'pointer', textAlign: 'left',
              background: value === p.id ? '#f5c800' : '#f9fafb',
              outline: value === p.id ? '2px solid #d4a900' : '2px solid transparent',
              transition: 'all 0.2s',
            }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{p.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#1a1a1a' }}>{p.label}</div>
            <div style={{ fontSize: 11, color: value === p.id ? '#1a1a1a' : '#9ca3af', marginTop: 3 }}>{p.desc}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
