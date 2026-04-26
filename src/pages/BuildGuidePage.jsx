import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Circle, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const steps = [
  { id:1, title:'Prepare Your Workspace', icon:'🛡️', color:'#f5c800', duration:'5 min', safety:'Always discharge static electricity before touching components!', tips:['Work on a non-static surface (wooden table)','Ground yourself by touching a metal object','Keep a clean, well-lit area'], details:['Clear a large, flat workspace — a wooden table works best.','Gather your tools: Phillips screwdriver, zip ties, thermal paste.','Unbox all components and lay them out carefully.','Touch a metal surface or wear an anti-static wrist strap.'] },
  { id:2, title:'Install the CPU', icon:'🔲', color:'#fbbf24', duration:'10 min', safety:'CPU pins are extremely fragile. Handle with care!', tips:['Never touch the CPU pins','Align the triangle marker on CPU with socket','Do not force — it should drop in gently'], details:['Open the CPU socket lever on the motherboard.','Align the CPU notches/triangle with the socket markers.','Gently place the CPU — it should seat without pressure.','Close the socket lever to lock the CPU in place.'] },
  { id:3, title:'Apply Thermal Paste', icon:'🌡️', color:'#f5c800', duration:'5 min', safety:'Thermal paste is non-conductive but keep it off the motherboard.', tips:['A pea-sized dot in the center is enough','Do not spread manually — the cooler will spread it','Too much paste can cause overheating'], details:['Apply a pea-sized dot of thermal paste to the center of the CPU.','Do not spread it — the cooler pressure will distribute it evenly.','If using a boxed cooler, it may have pre-applied paste — skip this step.'] },
  { id:4, title:'Install CPU Cooler', icon:'❄️', color:'#fbbf24', duration:'10 min', safety:'Ensure the cooler is firmly seated — loose coolers cause overheating.', tips:['Tighten screws in a cross pattern','Connect the fan header to CPU_FAN on motherboard','Check cooler clearance with RAM slots'], details:['Place the cooler over the CPU, aligning mounting holes.','Tighten screws in a diagonal/cross pattern for even pressure.','Connect the 4-pin PWM fan cable to the CPU_FAN header.','For AIO liquid coolers, mount the radiator to the case first.'] },
  { id:5, title:'Install RAM', icon:'💾', color:'#f5c800', duration:'5 min', safety:'Incorrect slot placement can prevent the system from booting.', tips:['Check your motherboard manual for correct slots (usually A2+B2)','Push firmly until both clips click','Use matched pairs for dual-channel'], details:['Consult your motherboard manual for the recommended RAM slots.','Open the retention clips on both ends of the slot.','Align the RAM notch with the slot key.','Press firmly and evenly until both clips snap into place.'] },
  { id:6, title:'Mount Motherboard in Case', icon:'🖥️', color:'#fbbf24', duration:'15 min', safety:'Missing standoffs can short-circuit the motherboard!', tips:['Install I/O shield before motherboard','Use all standoffs — never skip them','Do not overtighten screws'], details:['Install the I/O shield into the rear case panel.','Screw in brass standoffs matching your motherboard form factor.','Lower the motherboard onto the standoffs, aligning I/O ports.','Secure with screws — snug but not overtightened.'] },
  { id:7, title:'Install Power Supply (PSU)', icon:'⚡', color:'#f5c800', duration:'10 min', safety:'Never plug in the PSU until all components are connected.', tips:['Fan should face down (if case has bottom vent) or up','Route cables before installing PSU','Use modular cables only as needed'], details:['Slide the PSU into the case mount (usually bottom-rear).','Secure with 4 screws from the back panel.','Route the 24-pin ATX and 8-pin CPU cables through cable management holes.','Leave the PSU unplugged from the wall until everything is connected.'] },
  { id:8, title:'Install Storage (SSD/HDD)', icon:'💿', color:'#fbbf24', duration:'10 min', safety:'Handle SSDs gently — avoid static and physical shock.', tips:['M.2 NVMe slots are on the motherboard itself','SATA SSDs need both power and data cables','Secure M.2 with the small retention screw'], details:['For M.2 NVMe: Insert at 30° angle into the M.2 slot, press down, secure with screw.','For SATA SSD: Mount in drive bay, connect SATA data cable to motherboard and power cable from PSU.','For HDD: Mount in 3.5" bay, connect SATA data and power cables.'] },
  { id:9, title:'Install GPU', icon:'🎮', color:'#f5c800', duration:'10 min', safety:'Support heavy GPUs with a GPU support bracket to prevent sag.', tips:['Remove PCIe slot covers from case','Press firmly until the PCIe latch clicks','Connect 6/8-pin power connectors from PSU'], details:['Remove the PCIe slot covers from the case rear panel.','Align the GPU with the PCIe x16 slot (longest slot).','Press firmly until the retention latch clicks.','Secure the GPU bracket to the case with screws.','Connect PCIe power cables (6-pin, 8-pin, or 12-pin depending on GPU).'] },
  { id:10, title:'Connect All Cables', icon:'🔌', color:'#fbbf24', duration:'20 min', safety:'Incorrect front panel connections can prevent power button from working.', tips:['Refer to motherboard manual for front panel connectors','Cable management improves airflow','Double-check all connections before first boot'], details:['Connect 24-pin ATX power to motherboard.','Connect 8-pin CPU power (top-left of motherboard).','Connect PCIe power to GPU.','Connect SATA power to drives.','Connect front panel headers (Power SW, Reset SW, HDD LED, Power LED).','Connect case fans to SYS_FAN headers.','Connect USB 3.0 and audio headers.'] },
  { id:11, title:'First Boot & BIOS Setup', icon:'🚀', color:'#f5c800', duration:'15 min', safety:'If nothing displays, check RAM seating and GPU power connectors first.', tips:['Enable XMP/EXPO in BIOS for RAM speed','Check CPU temperature in BIOS','Set boot priority to your OS drive'], details:['Connect monitor, keyboard, and mouse.','Plug in power and press the power button.','Enter BIOS by pressing DEL or F2 during boot.','Enable XMP/EXPO profile for RAM.','Verify all components are detected.','Set boot order and install your OS.'] },
]

export default function BuildGuidePage() {
  const [expanded, setExpanded] = useState(null)
  const [completed, setCompleted] = useState(new Set())
  const toggle = (id) => setExpanded(expanded === id ? null : id)
  const toggleDone = (id) => { const n = new Set(completed); n.has(id) ? n.delete(id) : n.add(id); setCompleted(n) }
  const progress = Math.round((completed.size / steps.length) * 100)

  return (
    <PageWrapper>
      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#fffef7', padding: '40px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 14px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14 }}>STEP BY STEP</span>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-2px' }}>BUILD GUIDE.</h1>
            <p style={{ fontSize: 15, color: '#9ca3af', marginTop: 8 }}>Step-by-step instructions to build your PC from scratch</p>
          </motion.div>

          {/* Progress */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ padding: '20px 24px', borderRadius: 14, marginBottom: 28, background: '#ffffff', border: '2px solid #f5c800', boxShadow: '0 4px 16px rgba(245,200,0,0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#6b7280' }}>Build Progress</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#1a1a1a' }}>{completed.size}/{steps.length} — {progress}%</span>
            </div>
            <div style={{ height: 8, background: '#f3f4f6', borderRadius: 4, overflow: 'hidden' }}>
              <motion.div animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 100 }}
                style={{ height: '100%', background: '#f5c800', borderRadius: 4 }} />
            </div>
          </motion.div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((step, idx) => (
              <motion.div key={step.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04 }}
                style={{ borderRadius: 14, overflow: 'hidden', background: '#ffffff', border: completed.has(step.id) ? '2px solid #f5c800' : '2px solid #f3f4f6', boxShadow: completed.has(step.id) ? '0 4px 16px rgba(245,200,0,0.15)' : 'none' }}>

                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => toggle(step.id)}>
                  <button onClick={e => { e.stopPropagation(); toggleDone(step.id) }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
                    {completed.has(step.id) ? <CheckCircle size={22} color="#f5c800" /> : <Circle size={22} color="#d1d5db" />}
                  </button>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff9d6', border: '2px solid #f5c800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '2px 8px', borderRadius: 20 }}>Step {step.id}</span>
                      <span style={{ fontSize: 11, color: '#9ca3af' }}>⏱ {step.duration}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: completed.has(step.id) ? '#d4a900' : '#1a1a1a', marginTop: 4 }}>{step.title}</h3>
                  </div>
                  {expanded === step.id ? <ChevronUp size={18} color="#9ca3af" /> : <ChevronDown size={18} color="#9ca3af" />}
                </div>

                <AnimatePresence>
                  {expanded === step.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 20px 20px', borderTop: '1px solid #f3f4f6' }}>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff9d6', borderRadius: 10, padding: '10px 14px', margin: '14px 0', border: '1px solid #f5c800' }}>
                          <AlertTriangle size={16} color="#d4a900" style={{ flexShrink: 0, marginTop: 1 }} />
                          <p style={{ fontSize: 13, color: '#92400e', fontWeight: 600 }}>{step.safety}</p>
                        </div>
                        <h4 style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Instructions:</h4>
                        <ol style={{ paddingLeft: 18, marginBottom: 14 }}>
                          {step.details.map((d, i) => <li key={i} style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 5 }}>{d}</li>)}
                        </ol>
                        <h4 style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>💡 Pro Tips:</h4>
                        {step.tips.map((tip, i) => (
                          <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                            <span style={{ color: '#f5c800', fontWeight: 800, flexShrink: 0 }}>•</span>
                            <span style={{ fontSize: 13, color: '#6b7280' }}>{tip}</span>
                          </div>
                        ))}
                        <motion.button whileHover={{ scale: 1.02, background: completed.has(step.id) ? '#f3f4f6' : '#d4a900' }} whileTap={{ scale: 0.98 }}
                          onClick={() => toggleDone(step.id)}
                          style={{ marginTop: 16, padding: '12px 24px', borderRadius: 10, border: 'none', cursor: 'pointer', background: completed.has(step.id) ? '#fff9d6' : '#f5c800', color: '#1a1a1a', fontSize: 14, fontWeight: 800, transition: 'all 0.2s', boxShadow: completed.has(step.id) ? 'none' : '0 4px 12px rgba(245,200,0,0.3)' }}>
                          {completed.has(step.id) ? '✓ Completed — Click to undo' : 'Mark as Complete ✓'}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {completed.size === steps.length && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ marginTop: 28, padding: 32, borderRadius: 16, background: '#f5c800', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', marginBottom: 8 }}>Your PC is Built!</h2>
                <p style={{ fontSize: 15, color: '#1a1a1a', opacity: 0.7 }}>Congratulations! Time to install your OS and enjoy your new machine!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  )
}
