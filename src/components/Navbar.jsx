import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Menu, X } from 'lucide-react'

const links = [
  { to: '/',            label: 'Home' },
  { to: '/pc-builder',  label: 'Build PC' },
  { to: '/laptops',     label: 'Laptops' },
  { to: '/build-guide', label: 'Build Guide' },
  { to: '/compare',     label: 'Compare' },
  { to: '/about',       label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: '#ffffff',
        borderBottom: '2px solid #f5c800',
        boxShadow: '0 2px 16px rgba(245,200,0,0.12)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f5c800', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={20} color="#1a1a1a" />
          </div>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 20, color: '#1a1a1a', letterSpacing: '-0.5px' }}>
            PCraft
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ color: '#1a1a1a' }}
                style={{
                  padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                  color: pathname === l.to ? '#1a1a1a' : '#6b7280',
                  background: pathname === l.to ? '#fff9d6' : 'transparent',
                  borderBottom: pathname === l.to ? '2px solid #f5c800' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {l.label}
              </motion.div>
            </Link>
          ))}
          <Link to="/pc-builder" style={{ textDecoration: 'none', marginLeft: 12 }}>
            <motion.button
              whileHover={{ scale: 1.04, background: '#d4a900' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 24px', borderRadius: 10, border: 'none',
                cursor: 'pointer', background: '#f5c800', color: '#1a1a1a',
                fontWeight: 800, fontSize: 14, letterSpacing: '0.3px',
                boxShadow: '0 4px 14px rgba(245,200,0,0.4)',
                transition: 'all 0.2s',
              }}
            >
              BUILD NOW →
            </motion.button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} className="mobile-menu-btn">
          {open ? <X size={24} color="#1a1a1a" /> : <Menu size={24} color="#1a1a1a" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#ffffff', borderTop: '1px solid #f5c800', overflow: 'hidden' }}
          >
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                style={{ textDecoration: 'none', display: 'block', padding: '14px 24px', color: pathname === l.to ? '#1a1a1a' : '#6b7280', fontWeight: 600, borderBottom: '1px solid #f3f4f6', fontSize: 15, background: pathname === l.to ? '#fff9d6' : 'transparent' }}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
