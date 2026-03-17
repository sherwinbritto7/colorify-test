import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import ContactNowPage from './pages/ContactNowPage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './components/ScrollToTop'

import Footer from './components/Footer'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      
      {/* Global Background Atmosphere Orbs */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div 
          animate={{ 
            x: location.pathname === '/' ? [0, 50, 0] : [50, -50, 50],
            y: location.pathname === '/services' ? [0, 100, 0] : [0, 0, 0],
            background: location.pathname === '/services' ? 'radial-gradient(circle, #00a99d22 0%, transparent 70%)' : 'radial-gradient(circle, #c5d42915 0%, transparent 70%)'
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            filter: 'blur(100px)',
          }}
        />
        <motion.div 
          animate={{ 
            x: location.pathname === '/portfolio' ? [0, -50, 0] : [-50, 50, -50],
            y: location.pathname === '/contactnow' ? [0, -100, 0] : [0, 0, 0],
            background: location.pathname === '/portfolio' ? 'radial-gradient(circle, #7b3f9e22 0%, transparent 70%)' : 'radial-gradient(circle, #39b54a15 0%, transparent 70%)'
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '50vw',
            height: '50vw',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contactnow" element={<ContactNowPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

function GlobalUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        style={{ 
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--brand-green)',
          transformOrigin: '0%',
          zIndex: 2000
        }} 
      />
      <Navbar />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {!loading && (
        <>
          <CustomCursor />
          <GlobalUI />
        </>
      )}
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader setLoading={setLoading} key="preloader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => {
              document.body.style.overflow = "auto";
              document.body.style.overflowX = "hidden";
            }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ willChange: "opacity, transform" }}
          >
            <AppContent />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
