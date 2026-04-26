import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PCBuilderPage from './pages/PCBuilderPage'
import LaptopPage from './pages/LaptopPage'
import BuildGuidePage from './pages/BuildGuidePage'
import OwnerPage from './pages/OwnerPage'
import ComparePage from './pages/ComparePage'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh', background: '#fffef7' }}>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"            element={<HomePage />} />
          <Route path="/pc-builder"  element={<PCBuilderPage />} />
          <Route path="/laptops"     element={<LaptopPage />} />
          <Route path="/build-guide" element={<BuildGuidePage />} />
          <Route path="/compare"     element={<ComparePage />} />
          <Route path="/about"       element={<OwnerPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
