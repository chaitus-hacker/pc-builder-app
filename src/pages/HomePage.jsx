import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Laptop, ArrowRight, Monitor, Zap, Shield, Star, Users, Award, BookOpen } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import PCShowcase from '../components/PCShowcase'

const cycleWords = ['Create.', 'Code.', 'Game.', 'Edit.', 'Work.', 'Build.']

const marqueeItems = [
  '⚡ Smart Recommendations', '💰 Price Comparison', '🛠️ Build Guide', '⚖️ Compare Products',
  '🎮 Gaming Builds', '🎨 Editing Rigs', '💼 Office PCs', '📚 Study Setups',
  '⚡ Smart Recommendations', '💰 Price Comparison', '🛠️ Build Guide', '⚖️ Compare Products',
  '🎮 Gaming Builds', '🎨 Editing Rigs', '💼 Office PCs', '📚 Study Setups',
]

const categories = [
  { icon: '🎮', title: 'Gaming', desc: 'High FPS builds for competitive and AAA gaming', to: '/pc-builder', accent: '#f5c800' },
  { icon: '🎨', title: 'Content Creation', desc: 'Video editing, 3D rendering and design workstations', to: '/pc-builder', accent: '#fbbf24' },
  { icon: '📚', title: 'Studying', desc: 'Reliable everyday machines for students', to: '/pc-builder', accent: '#f5c800' },
  { icon: '💼', title: 'Office & Work', desc: 'Productivity-focused builds for professionals', to: '/pc-builder', accent: '#fbbf24' },
  { icon: '💻', title: 'Laptops', desc: 'Find the perfect laptop for your needs', to: '/laptops', accent: '#f5c800' },
  { icon: '🛠️', title: 'Build Guide', desc: 'Step-by-step PC assembly instructions', to: '/build-guide', accent: '#fbbf24' },
  { icon: '⚖️', title: 'Compare', desc: 'Side-by-side product comparison tool', to: '/compare', accent: '#f5c800' },
  { icon: '💬', title: 'About Us', desc: 'Meet the team behind PCraft', to: '/about', accent: '#fbbf24' },
]

const stats = [
  { value: '500+', label: 'Components' },
  { value: '50+', label: 'Laptops' },
  { value: '4', label: 'Use Cases' },
  { value: '100%', label: 'Free' },
]

const features = [
  { icon: <Zap size={22} />, title: 'Smart Picks', desc: 'Recommendations based on your exact purpose and budget' },
  { icon: <Monitor size={22} />, title: 'Price Compare', desc: 'Amazon vs Flipkart side by side — lowest always highlighted' },
  { icon: <Shield size={22} />, title: 'Budget Safe', desc: 'Only shows parts that fit within your budget range' },
  { icon: <BookOpen size={22} />, title: 'Build Guide', desc: '11-step assembly guide with safety tips and pro tricks' },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % cycleWords.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <PageWrapper>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#fffef7', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Yellow blob */}
        <div style={{ position: 'absolute', top: -120, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,200,0,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '5px 14px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 20 }}>
                🚀 PC Builder & Recommender
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, color: '#1a1a1a', letterSpacing: '-2px', marginBottom: 4 }}>
              COMPUTERS<br />FOR EVERYONE.
            </motion.h1>

            {/* Animated word */}
            <div style={{ height: 56, overflow: 'hidden', marginBottom: 20 }}>
              <AnimatePresence mode="wait">
                <motion.div key={wordIdx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 900, color: '#f5c800', letterSpacing: '-1px', lineHeight: 1.2 }}>
                  You {cycleWords[wordIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
              Get smart PC build recommendations and laptop suggestions based on your budget and use case. Compare prices across Amazon & Flipkart instantly.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <motion.button whileHover={{ scale: 1.04, background: '#d4a900' }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/pc-builder')}
                style={{ padding: '16px 36px', borderRadius: 12, border: 'none', cursor: 'pointer', background: '#f5c800', color: '#1a1a1a', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 6px 20px rgba(245,200,0,0.4)', transition: 'all 0.2s', letterSpacing: '0.3px' }}>
                <Cpu size={20} /> BUILD A PC →
              </motion.button>
              <motion.button whileHover={{ scale: 1.04, background: '#1a1a1a', color: '#f5c800' }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/laptops')}
                style={{ padding: '16px 36px', borderRadius: 12, border: '2px solid #1a1a1a', cursor: 'pointer', background: 'transparent', color: '#1a1a1a', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s', letterSpacing: '0.3px' }}>
                <Laptop size={20} /> FIND A LAPTOP →
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: 36, marginTop: 48, paddingTop: 32, borderTop: '1px solid #f3f4f6' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: PC Showcase */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}>
            <PCShowcase />
          </motion.div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important}section>div>div:last-child{display:none!important}}`}</style>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <div style={{ background: '#f5c800', borderTop: '1px solid #d4a900', borderBottom: '1px solid #d4a900', padding: '12px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', padding: '0 28px', borderRight: '1px solid rgba(0,0,0,0.12)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 12px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
              FIND A SOLUTION
            </span>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              WHAT ARE YOU<br />BUILDING FOR?
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {categories.map((cat, i) => (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(245,200,0,0.2)' }}
                onClick={() => navigate(cat.to)}
                style={{ padding: '28px 24px', borderRadius: 16, background: '#fffef7', border: '2px solid #f3f4f6', cursor: 'pointer', transition: 'all 0.25s' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: '#fff9d6', border: '2px solid #f5c800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 16 }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a', marginBottom: 8 }}>{cat.title}</h3>
                <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.6, marginBottom: 16 }}>{cat.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 5 }}>
                  EXPLORE <ArrowRight size={13} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section style={{ background: '#fffef7', padding: '100px 24px', borderTop: '1px solid #f3f4f6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 12px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
              WHY PCRAFT
            </span>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-1.5px' }}>
              EVERYTHING YOU NEED.<br />NOTHING YOU DON'T.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(245,200,0,0.15)' }}
                style={{ padding: '32px 28px', borderRadius: 16, background: '#ffffff', border: '2px solid #f3f4f6', transition: 'all 0.25s' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f5c800', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: '#1a1a1a' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a1a', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section style={{ background: '#f5c800', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-1.5px' }}>
              THREE STEPS.<br />PERFECT BUILD.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { num: '01', title: 'CHOOSE PURPOSE', desc: 'Gaming, editing, studying or office — tell us what you need.', icon: <Monitor size={22} /> },
              { num: '02', title: 'SET BUDGET', desc: 'Drag the slider. We only show parts that fit within your range.', icon: <Zap size={22} /> },
              { num: '03', title: 'SELECT & BUY', desc: 'Pick your parts and click Amazon or Flipkart to buy directly.', icon: <Shield size={22} /> },
            ].map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ padding: '40px 32px', borderRadius: 16, background: '#ffffff', border: '2px solid rgba(0,0,0,0.08)' }}>
                <div style={{ color: '#1a1a1a', marginBottom: 16 }}>{step.icon}</div>
                <div style={{ fontSize: 52, fontWeight: 900, color: 'rgba(0,0,0,0.06)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1px', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#1a1a1a', padding: '100px 24px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#f5c800', letterSpacing: '-2px', marginBottom: 16 }}>
            READY TO BUILD?
          </h2>
          <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 40 }}>No account needed. Free forever.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button whileHover={{ scale: 1.04, background: '#d4a900' }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/pc-builder')}
              style={{ padding: '18px 44px', borderRadius: 12, border: 'none', cursor: 'pointer', background: '#f5c800', color: '#1a1a1a', fontSize: 16, fontWeight: 800, boxShadow: '0 6px 24px rgba(245,200,0,0.35)', transition: 'all 0.2s', letterSpacing: '0.3px' }}>
              BUILD A PC →
            </motion.button>
            <motion.button whileHover={{ scale: 1.04, background: '#ffffff', color: '#1a1a1a' }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/laptops')}
              style={{ padding: '18px 44px', borderRadius: 12, border: '2px solid rgba(255,255,255,0.4)', cursor: 'pointer', background: 'transparent', color: '#ffffff', fontSize: 16, fontWeight: 800, transition: 'all 0.2s', letterSpacing: '0.3px' }}>
              FIND A LAPTOP →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── CREATED BY MGIT STUDENTS ──────────────────────────────────── */}
      <div style={{ background: '#f5c800', borderTop: '2px solid #d4a900', padding: '20px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {Array(8).fill('✨ CREATED BY MGIT STUDENTS ✨').map((text, i) => (
            <span key={i} style={{ fontSize: 16, fontWeight: 900, color: '#1a1a1a', whiteSpace: 'nowrap', padding: '0 40px', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '2px' }}>
              {text}
            </span>
          ))}
        </div>
      </div>

    </PageWrapper>
  )
}
