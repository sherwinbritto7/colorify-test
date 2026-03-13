import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarqueeRow = ({ direction = "left", text, color }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "0.5rem 0",
        display: "flex",
      }}
    >
      <motion.div
        animate={{ x: direction === "left" ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        style={{
          display: "flex",
          gap: "2rem",
          width: "fit-content",
        }}
      >
        {/* Render 8 items (4 pairs) to be perfectly seamless at -50% reset */}
        {[...Array(8)].map((_, i) => (
          <h2
            key={i}
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              fontWeight: 900,
              margin: 0,
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              // Alternate solid and outline
              color: i % 2 === 0 ? color : "transparent",
              WebkitTextStroke: i % 2 === 0 ? "none" : `1px ${color}`,
              opacity: i % 2 === 0 ? 0.9 : 0.5,
            }}
          >
            {text} <span style={{ fontSize: "0.5em" }}>•</span>
          </h2>
        ))}
      </motion.div>
    </div>
  );
};


const ScrollingText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        padding: "8rem 0", 
        overflow: "hidden", 
        position: "relative",
        background: "transparent"
      }}
    >
      {/* Background Atmosphere Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw",
        height: "60vw",
        background: "radial-gradient(circle, rgba(123, 63, 158, 0.05) 0%, transparent 70%)",
        filter: "blur(120px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <motion.div style={{ position: "relative", zIndex: 1, skewX: skew, scale }}>
        <MarqueeRow 
          direction="left" 
          text="EXPERIENCES GALA FESTIVALS" 
          color="#00a99d" 
        />
        <MarqueeRow 
          direction="right" 
          text="PRODUCTIONS DESIGN STRATEGY" 
          color="#7b3f9e" 
        />
        <MarqueeRow 
          direction="left" 
          text="MOMENTS MEMORIES COLORIFY" 
          color="#c5d429" 
        />
      </motion.div>
    </section>
  );
};

export default ScrollingText;

