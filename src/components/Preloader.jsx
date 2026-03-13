import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Preloader = ({ setLoading }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden'
    
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setLoading(false)
          }, 400) // Reduced wait time for snappier feel
          return 100
        }
        return prev + 1
      })
    }, 20) // Slightly faster increment

    return () => {
      clearInterval(timer)
    }
  }, [setLoading])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '10%',
          right: '10%',
          pointerEvents: 'none'
        }}
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--brand-purple) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '10%',
          left: '10%',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <img 
            src="/logo.jpg" 
            alt="Colorify Logo" 
            style={{ 
              height: '60px', 
              borderRadius: '12px',
              border: '2px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }} 
          />
          {/* Pulsing ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: -4,
              border: '2px solid var(--brand-green)',
              borderRadius: '14px'
            }}
          />
        </motion.div>

        <div style={{ width: '240px', textAlign: 'center' }}>
          <div style={{ 
            height: '2px', 
            width: '100%', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              style={{
                height: '100%',
                background: 'var(--logo-gradient)',
                backgroundSize: '240px 100%'
              }}
            />
          </div>
          <motion.span 
            style={{ 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              color: 'var(--text-secondary)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-display)'
            }}
          >
            {percent}%
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '5vh',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}
      >
        Initializing Experience
      </motion.div>
    </motion.div>
  )
}

export default Preloader
