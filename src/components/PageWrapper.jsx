import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Yellow top progress bar
function TopBar() {
  const [width, setWidth] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setWidth(0)
    setVisible(true)
    const t1 = setTimeout(() => setWidth(70), 50)
    const t2 = setTimeout(() => setWidth(100), 350)
    const t3 = setTimeout(() => setVisible(false), 700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (!visible) return null
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: 3, background: '#f3f4f6' }}>
      <div style={{ height: '100%', background: '#f5c800', width: `${width}%`, transition: 'width 0.35s cubic-bezier(0.22,1,0.36,1)', boxShadow: '0 0 8px rgba(245,200,0,0.8)' }} />
    </div>
  )
}

// Page variants — slide up + fade
const variants = {
  initial:  { opacity: 0, y: 32, scale: 0.99 },
  animate:  { opacity: 1, y: 0,  scale: 1 },
  exit:     { opacity: 0, y: -20, scale: 0.99 },
}

export default function PageWrapper({ children }) {
  return (
    <>
      <TopBar />
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}
