import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Heart, Code, Coffee } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

export default function OwnerPage() {
  return (
    <PageWrapper>
      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#fffef7', padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 800, color: '#1a1a1a', background: '#f5c800', padding: '4px 14px', borderRadius: 20, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14 }}>THE TEAM</span>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-2px' }}>ABOUT US.</h1>
            <p style={{ fontSize: 15, color: '#9ca3af', marginTop: 8 }}>Built by developers who love PC hardware</p>
          </motion.div>

          {/* Profile */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            style={{ padding: 40, borderRadius: 16, textAlign: 'center', marginBottom: 20, background: '#ffffff', border: '2px solid #f5c800', boxShadow: '0 4px 24px rgba(245,200,0,0.12)' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              style={{ width: 96, height: 96, borderRadius: '50%', margin: '0 auto 20px', background: '#f5c800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, boxShadow: '0 4px 16px rgba(245,200,0,0.4)' }}>
              👨‍💻
            </motion.div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 900, color: '#1a1a1a', marginBottom: 6 }}>Full-Stack Developer</h2>
            <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 20 }}>PC Enthusiast & Hardware Nerd</p>
            <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 28px' }}>
              Built PCraft to simplify the overwhelming process of choosing PC components and laptops. Combines a love for web development and PC hardware into one free tool.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/chaitus-hacker' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <Twitter size={16} />, label: 'Twitter', href: 'https://twitter.com' },
                { icon: <Mail size={16} />, label: 'Email', href: 'mailto:chaitus244@gmail.com' },
              ].map(s => (
                <motion.a key={s.label} whileHover={{ scale: 1.05, background: '#f5c800' }} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ padding: '12px 22px', borderRadius: 10, border: '2px solid #e5e7eb', cursor: 'pointer', background: 'white', color: '#1a1a1a', textDecoration: 'none', fontSize: 14, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}>
                  {s.icon} {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ padding: 28, borderRadius: 16, marginBottom: 20, background: '#ffffff', border: '2px solid #f3f4f6' }}>
            <h2 style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Code size={15} color="#d4a900" /> TECH STACK
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 10 }}>
              {['React 18', 'Vite', 'Framer Motion', 'Three.js', 'React Router', 'Lucide Icons'].map(name => (
                <div key={name} style={{ padding: '10px 14px', borderRadius: 8, background: '#fff9d6', border: '1px solid #f5c800', textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>
                  {name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ padding: 28, borderRadius: 16, marginBottom: 20, background: '#ffffff', border: '2px solid #f3f4f6' }}>
            <h2 style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>WHAT MAKES PCRAFT SPECIAL</h2>
            {[
              ['🎯', 'Smart recommendations based on purpose and budget'],
              ['💰', 'Price comparison across Amazon & Flipkart with lowest highlighted'],
              ['🛠️', 'Step-by-step PC assembly guide with safety tips'],
              ['⚖️', 'Side-by-side product comparison tool'],
              ['🛒', 'Direct buy links — click and go straight to the product'],
              ['📱', 'Fully responsive design for all devices'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ padding: 28, borderRadius: 16, background: '#ffffff', border: '2px solid #f3f4f6' }}>
            <h2 style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 6 }}>GET IN TOUCH</h2>
            <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 20 }}>Have feedback or suggestions? Drop a message at <strong style={{ color: '#1a1a1a' }}>chaitus244@gmail.com</strong></p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Your Name', 'Your Email'].map(ph => (
                <input key={ph} type={ph.includes('Email') ? 'email' : 'text'} placeholder={ph}
                  style={{ padding: '12px 16px', borderRadius: 8, border: '2px solid #e5e7eb', fontSize: 14, outline: 'none', color: '#1a1a1a', background: '#f9fafb', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = '#f5c800'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
              ))}
              <textarea placeholder="Your Message" rows={4}
                style={{ padding: '12px 16px', borderRadius: 8, border: '2px solid #e5e7eb', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'inherit', color: '#1a1a1a', background: '#f9fafb', transition: 'border 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#f5c800'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
              <motion.button whileHover={{ scale: 1.02, background: '#d4a900' }} whileTap={{ scale: 0.98 }} type="submit"
                onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:chaitus244@gmail.com' }}
                style={{ padding: '15px 28px', borderRadius: 10, border: 'none', cursor: 'pointer', background: '#f5c800', color: '#1a1a1a', fontSize: 15, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 16px rgba(245,200,0,0.35)', transition: 'all 0.2s', letterSpacing: '0.3px' }}>
                <Mail size={17} /> SEND MESSAGE →
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: 36, padding: 20 }}>
            <p style={{ fontSize: 13, color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              Made with <Heart size={13} color="#ef4444" fill="#ef4444" /> and <Coffee size={13} color="#d4a900" /> by PCraft Team
            </p>
            <p style={{ fontSize: 12, color: '#d1d5db', marginTop: 6 }}>© 2026 PCraft. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
