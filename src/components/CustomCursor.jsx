import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorTextRef = useRef("");

  // Position Motion Values (Bypass React state for 60fps+ performance)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Optimized Spring Config (High stiffness, low damping = FAST)
  const springConfig = { damping: 20, stiffness: 800, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) {
        cursorX.set(e.clientX - 40);
        cursorY.set(e.clientY - 40);
        return;
      }
      
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[data-cursor-hover]");
      
      setIsHovering(!!isInteractive);

      const textTarget = target.closest("[data-cursor-text]");
      const newText = textTarget ? textTarget.getAttribute("data-cursor-text") : "";
      if (cursorTextRef.current !== newText) {
        setCursorText(newText);
        cursorTextRef.current = newText;
      }

      const hideTarget = target.closest("[data-cursor-hide]");
      setIsCursorHidden(!!hideTarget);

      // Always offset by 40 because the base container size is now fixed at 80x80
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .cursor-global {
            display: none !important;
          }
        }
      `}</style>
      <motion.div 
        className="cursor-global"
        style={{
          position: 'fixed',
          top: 0,
          width: '80px',
          height: '80px',
          background: cursorText ? 'white' : 'linear-gradient(135deg, #c5d429, #00a99d)',
          borderRadius: cursorText ? '50%' : '50%',
          pointerEvents: 'none',
          zIndex: 200000,
          mixBlendMode: cursorText ? 'normal' : 'difference',
          x: springX,
          y: springY,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: cursorText ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
          color: 'black',
          fontSize: '14px',
          fontWeight: '900',
          letterSpacing: '1px',
          textAlign: 'center',
          transformOrigin: "center center",
        }}
        animate={{ 
          scale: cursorText ? 1 : (isHovering ? 0.6 : 0.25),
          opacity: isCursorHidden ? 0 : 1,
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 400, damping: 25 },
          opacity: { duration: 0.2 }
        }}
      >
        <AnimatePresence mode="wait">
          {cursorText && (
            <motion.span
              key={cursorText}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              style={{ position: 'absolute' }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
