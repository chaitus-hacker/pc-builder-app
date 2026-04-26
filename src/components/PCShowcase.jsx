import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// PC component icons with labels and colors
const pcParts = [
  { emoji: '🔲', label: 'CPU',        color: '#6366f1', size: 72, x: 50,  y: 18  },
  { emoji: '🎮', label: 'GPU',        color: '#8b5cf6', size: 68, x: 78,  y: 42  },
  { emoji: '💾', label: 'RAM',        color: '#06b6d4', size: 56, x: 62,  y: 70  },
  { emoji: '💿', label: 'SSD',        color: '#10b981', size: 54, x: 28,  y: 62  },
  { emoji: '⚡', label: 'PSU',        color: '#f59e0b', size: 52, x: 14,  y: 38  },
  { emoji: '🖥️', label: 'Motherboard',color: '#ef4444', size: 64, x: 36,  y: 30  },
  { emoji: '🗄️', label: 'Case',       color: '#84cc16', size: 58, x: 70,  y: 18  },
  { emoji: '🖥️', label: 'Monitor',    color: '#f97316', size: 60, x: 20,  y: 16  },
  { emoji: '❄️', label: 'Cooler',     color: '#3b82f6', size: 50, x: 48,  y: 50  },
  { emoji: '⌨️', label: 'Keyboard',   color: '#ec4899', size: 52, x: 82,  y: 68  },
]

// Floating animation variants — each part gets a unique float path
function FloatingPart({ part, index }) {
  const delay = index * 0.3
  const duration = 3 + (index % 4) * 0.8
  const yRange = 10 + (index % 3) * 6

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.1 + delay * 0.15, type: 'spring', stiffness: 120, damping: 12 }}
      style={{
        position: 'absolute',
        left: `${part.x}%`,
        top: `${part.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    >
      <motion.div
        animate={{ y: [-yRange / 2, yRange / 2, -yRange / 2] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.25, zIndex: 10 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            cursor: 'default',
          }}
        >
          {/* Glow card */}
          <div style={{
            width: part.size + 16, height: part.size + 16,
            borderRadius: 18,
            background: `linear-gradient(135deg, ${part.color}18, ${part.color}30)`,
            border: `2px solid ${part.color}40`,
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 32px ${part.color}25, inset 0 1px 0 rgba(255,255,255,0.6)`,
            fontSize: part.size * 0.55,
          }}>
            {part.emoji}
          </div>
          {/* Label pill */}
          <div style={{
            fontSize: 10, fontWeight: 700, color: part.color,
            background: `${part.color}15`,
            border: `1px solid ${part.color}30`,
            padding: '2px 8px', borderRadius: 20,
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap',
          }}>
            {part.label}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Animated connecting lines between parts (SVG)
function ConnectionLines() {
  const lines = [
    [0, 5], [0, 2], [1, 2], [1, 8], [2, 3],
    [3, 4], [4, 5], [5, 6], [6, 0], [7, 8],
  ]
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {lines.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={pcParts[a].x} y1={pcParts[a].y}
          x2={pcParts[b].x} y2={pcParts[b].y}
          stroke={pcParts[a].color}
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.35, pathLength: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
        />
      ))}
    </svg>
  )
}

export default function PCShowcase() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 420, userSelect: 'none' }}>
      {/* Soft radial glow background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        borderRadius: 24,
        pointerEvents: 'none',
      }} />

      <ConnectionLines />

      {pcParts.map((part, i) => (
        <FloatingPart key={part.label} part={part} index={i} />
      ))}

      {/* Center badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 150 }}
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          borderRadius: '50%',
          width: 64, height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(99,102,241,0.45)',
          border: '3px solid white',
        }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ fontSize: 28 }}
        >
          ⚙️
        </motion.span>
      </motion.div>
    </div>
  )
}
