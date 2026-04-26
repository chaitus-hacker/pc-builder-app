import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, ChevronRight, RotateCcw } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import PurposeSelector from '../components/PurposeSelector'
import BudgetSlider from '../components/BudgetSlider'
import LaptopCard from '../components/LaptopCard'
import { laptopData, getBudgetTier } from '../data/components'

const steps = ['Purpose', 'Budget', 'Results']

export default function LaptopPage() {
  const [step, setStep] = useState(0)
  const [purpose, setPurpose] = useState('gaming')
  const [budget, setBudget] = useState(80000)
  const tier = getBudgetTier(budget)
  const getLaptops = () => laptopData[purpose]?.[tier] || laptopData[purpose]?.budget || []
  const reset = () => { setStep(0); setPurpose('gaming'); setBudget(80000) }

  return (
    <PageWrapper>
      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#fffef7', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 14px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14 }}>LAPTOP FINDER</span>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-2px' }}>FIND YOUR LAPTOP.</h1>
            <p style={{ fontSize: 15, color: '#9ca3af', marginTop: 8 }}>Smart recommendations based on your needs and budget</p>
          </motion.div>

          {/* Step indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 40 }}>
            {steps.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div animate={{ scale: step === i ? 1.1 : 1 }}
                  style={{ width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: i <= step ? '#f5c800' : '#f3f4f6', color: '#1a1a1a', fontWeight: 800, fontSize: 13, border: i <= step ? '2px solid #d4a900' : '2px solid #e5e7eb' }}>
                  {i < step ? '✓' : i + 1}
                </motion.div>
                <span style={{ marginLeft: 8, fontSize: 13, fontWeight: 700, color: i <= step ? '#1a1a1a' : '#9ca3af' }}>{s}</span>
                {i < steps.length - 1 && <div style={{ width: 40, height: 2, background: i < step ? '#f5c800' : '#e5e7eb', margin: '0 12px' }} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="s0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
                <div style={{ maxWidth: 540, margin: '0 auto', padding: 36, borderRadius: 16, background: '#ffffff', border: '2px solid #f3f4f6', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <PurposeSelector value={purpose} onChange={setPurpose} />
                  <motion.button whileHover={{ scale: 1.03, background: '#d4a900' }} whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(1)}
                    style={{ marginTop: 24, width: '100%', padding: '16px', borderRadius: 12, border: 'none', cursor: 'pointer', background: '#f5c800', color: '#1a1a1a', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 16px rgba(245,200,0,0.35)', transition: 'all 0.2s', letterSpacing: '0.3px' }}>
                    NEXT: SET BUDGET <ChevronRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
                <div style={{ maxWidth: 540, margin: '0 auto', padding: 36, borderRadius: 16, background: '#ffffff', border: '2px solid #f3f4f6', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <BudgetSlider value={budget} onChange={setBudget} min={30000} max={300000} step={5000} label="Laptop Budget (INR)" />
                  <div style={{ marginTop: 18, padding: '12px 16px', background: '#fff9d6', borderRadius: 10, border: '1px solid #f5c800', fontSize: 13, color: '#6b7280' }}>
                    <strong style={{ color: '#1a1a1a' }}>Purpose:</strong> {purpose.charAt(0).toUpperCase() + purpose.slice(1)} &nbsp;·&nbsp;
                    <strong style={{ color: '#1a1a1a' }}>Tier:</strong> {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                    <motion.button whileHover={{ scale: 1.02 }} onClick={() => setStep(0)}
                      style={{ flex: 1, padding: '15px', borderRadius: 12, border: '2px solid #e5e7eb', cursor: 'pointer', background: 'white', color: '#6b7280', fontSize: 15, fontWeight: 700, transition: 'all 0.2s' }}>
                      ← Back
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.03, background: '#d4a900' }} whileTap={{ scale: 0.97 }} onClick={() => setStep(2)}
                      style={{ flex: 2, padding: '15px', borderRadius: 12, border: 'none', cursor: 'pointer', background: '#f5c800', color: '#1a1a1a', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 16px rgba(245,200,0,0.35)', transition: 'all 0.2s', letterSpacing: '0.3px' }}>
                      SHOW RECOMMENDATIONS <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>
                <div style={{ padding: '18px 24px', borderRadius: 14, marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, background: '#ffffff', border: '2px solid #f5c800', boxShadow: '0 4px 16px rgba(245,200,0,0.12)' }}>
                  <div>
                    <p style={{ fontSize: 11, color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Recommended Laptops</p>
                    <h2 style={{ fontSize: 20, fontWeight: 900, color: '#1a1a1a', marginTop: 2 }}>
                      {purpose.charAt(0).toUpperCase() + purpose.slice(1)} — {tier.charAt(0).toUpperCase() + tier.slice(1)} Range
                    </h2>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>Budget</p>
                    <p style={{ fontSize: 22, fontWeight: 900, color: '#1a1a1a', fontFamily: 'Space Grotesk, sans-serif' }}>₹{budget.toLocaleString('en-IN')}</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.03, background: '#f3f4f6' }} onClick={reset}
                    style={{ padding: '12px 22px', borderRadius: 10, border: '2px solid #e5e7eb', cursor: 'pointer', background: 'white', color: '#6b7280', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }}>
                    <RotateCcw size={15} /> Reset
                  </motion.button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                  {getLaptops().map((laptop, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                      <LaptopCard laptop={laptop} />
                    </motion.div>
                  ))}
                </div>

                {getLaptops().length === 0 && (
                  <div style={{ textAlign: 'center', padding: 60 }}>
                    <p style={{ fontSize: 16, color: '#9ca3af' }}>No laptops found. Try adjusting your budget or purpose.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  )
}
