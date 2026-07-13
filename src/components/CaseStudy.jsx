import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Inline Custom SVGs for Case Study Illustrations that match the requested format

const ClipboardIllustration = ({ accentColor }) => (
  <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ maxWidth: "340px", display: "block", margin: "0 auto", overflow: "visible" }}>
    <defs>
      <linearGradient id="clipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <linearGradient id="clipMetal" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#222" />
        <stop offset="50%" stopColor="#666" />
        <stop offset="100%" stopColor="#222" />
      </linearGradient>
      <radialGradient id="innerGlowGradClip" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor={accentColor} stopOpacity="0.5" />
        <stop offset="60%" stopColor={accentColor} stopOpacity="0.15" />
        <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
      </radialGradient>
      <filter id="clipGlow">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Subtle Background Glow behind the Board */}
    <motion.circle
      cx="200"
      cy="220"
      r="120"
      fill="url(#innerGlowGradClip)"
      opacity="0.25"
      animate={{
        scale: [0.95, 1.05, 0.95],
        opacity: [0.2, 0.3, 0.2]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Clipboard Background Board */}
    <rect x="80" y="80" width="240" height="280" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    <rect x="100" y="110" width="200" height="220" rx="8" fill="url(#clipGrad)" opacity="0.15" />
    
    {/* Clipboard Top Clip */}
    <path d="M160 80 L160 60 C160 54 165 50 170 50 L230 50 C235 50 240 54 240 60 L240 80 Z" fill="url(#clipMetal)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <circle cx="200" cy="65" r="5" fill={accentColor} />

    {/* Big Pulsing/Glowing Accent Question Mark */}
    <motion.g
      style={{ originX: "200px", originY: "210px" }}
      animate={{
        scale: [1, 1.08, 1],
        filter: ["drop-shadow(0 0 5px rgba(255,255,255,0))", `drop-shadow(0 0 15px ${accentColor}dd)`, "drop-shadow(0 0 5px rgba(255,255,255,0))"]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <text x="200" y="235" fontSize="100" fontWeight="900" fill={accentColor} textAnchor="middle" filter="url(#clipGlow)">?</text>
    </motion.g>

    {/* Lines on Clipboard (Drawn style) */}
    <motion.line x1="120" y1="270" x2="280" y2="270" stroke="rgba(255,255,255,0.35)" strokeWidth="4" strokeLinecap="round"
      animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    <motion.line x1="120" y1="295" x2="240" y2="295" stroke="rgba(255,255,255,0.35)" strokeWidth="4" strokeLinecap="round"
      animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
    <motion.line x1="120" y1="320" x2="200" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeLinecap="round"
      animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

    {/* Left Figure shrugging / floating */}
    <g transform="translate(40, 200)">
      <motion.g 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="30" cy="50" r="12" fill={accentColor} />
        <path d="M15 75 C15 65 20 65 30 65 C40 65 45 65 45 75 L45 130 L35 130 L35 100 L25 100 L25 130 L15 130 Z" fill="rgba(255,255,255,0.8)" />
        <line x1="30" y1="75" x2="50" y2="85" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </g>

    {/* Right Figure shrugging / floating */}
    <g transform="translate(300, 200)">
      <motion.g 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <circle cx="30" cy="50" r="12" fill={accentColor} />
        <path d="M15 75 C15 65 20 65 30 65 C40 65 45 65 45 75 L45 130 L35 130 L35 100 L25 100 L25 130 L15 130 Z" fill="rgba(255,255,255,0.8)" />
        <line x1="30" y1="75" x2="10" y2="85" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </g>

    {/* Connective dots/dashed lines - Animated to flow */}
    <motion.path 
      d="M220 50 Q280 20 340 80" 
      fill="none" 
      stroke="rgba(255,255,255,0.15)" 
      strokeWidth="2.5" 
      strokeDasharray="6,6"
      animate={{ strokeDashoffset: [0, -24] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const LightbulbIllustration = ({ accentColor }) => (
  <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ maxWidth: "340px", display: "block", margin: "0 auto", overflow: "visible" }}>
    <defs>
      <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur1" />
        <feGaussianBlur stdDeviation="20" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="innerGlowGradBulb" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor={accentColor} stopOpacity="0.5" />
        <stop offset="60%" stopColor={accentColor} stopOpacity="0.15" />
        <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
      </radialGradient>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e1e1e" />
        <stop offset="50%" stopColor="#555" />
        <stop offset="100%" stopColor="#1e1e1e" />
      </linearGradient>
    </defs>

    {/* Glowing Background Glow (Breathes/Pulses) */}
    <motion.circle
      cx="200"
      cy="190"
      r="100"
      fill="url(#innerGlowGradBulb)"
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Outer glass glow rays */}
    <g>
      {/* Top ray */}
      <motion.line x1="200" y1="50" x2="200" y2="30" stroke={accentColor} strokeWidth="3" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      {/* Top-Right ray */}
      <motion.line x1="290" y1="100" x2="305" y2="85" stroke={accentColor} strokeWidth="3" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0], y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
      {/* Right ray */}
      <motion.line x1="330" y1="190" x2="350" y2="190" stroke={accentColor} strokeWidth="3" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
      {/* Top-Left ray */}
      <motion.line x1="110" y1="100" x2="95" y2="85" stroke={accentColor} strokeWidth="3" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], x: [0, -4, 0], y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
      {/* Left ray */}
      <motion.line x1="70" y1="190" x2="50" y2="190" stroke={accentColor} strokeWidth="3" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], x: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
    </g>

    {/* Sparkles/Particles */}
    <motion.circle cx="120" cy="110" r="3" fill={accentColor} animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="280" cy="120" r="4" fill={accentColor} animate={{ y: [0, -18, 0], opacity: [0.1, 0.7, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
    <motion.circle cx="150" cy="70" r="2" fill={accentColor} animate={{ y: [0, -8, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
    <motion.circle cx="250" cy="75" r="2.5" fill={accentColor} animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />

    {/* Bulb Glass Outline */}
    <path 
      d="M200 70 C125 70 105 135 105 190 C105 235 130 255 155 275 L155 310 L245 310 L245 275 C270 255 295 235 295 190 C295 135 275 70 200 70 Z" 
      fill="rgba(255, 255, 255, 0.02)" 
      stroke="rgba(255, 255, 255, 0.15)" 
      strokeWidth="2" 
    />
    
    {/* Inner Glass Highlight (Reflection) */}
    <path 
      d="M125 150 C120 180 125 210 135 230" 
      fill="none" 
      stroke="rgba(255, 255, 255, 0.25)" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />

    {/* Lightbulb Screw Base */}
    <g>
      <rect x="155" y="310" width="90" height="8" rx="4" fill="url(#metalGrad)" stroke="rgba(255,255,255,0.1)" />
      <rect x="160" y="318" width="80" height="8" rx="4" fill="url(#metalGrad)" stroke="rgba(255,255,255,0.1)" />
      <rect x="165" y="326" width="70" height="8" rx="4" fill="url(#metalGrad)" stroke="rgba(255,255,255,0.1)" />
      <path d="M175 334 C175 344 225 344 225 334 Z" fill="#151515" stroke="rgba(255,255,255,0.1)" />
    </g>

    {/* Glowing Filament (Double loop with intense glow) */}
    <g>
      {/* Support Wires */}
      <line x1="175" y1="310" x2="175" y2="220" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
      <line x1="225" y1="310" x2="225" y2="220" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
      
      {/* Filament Loop */}
      <motion.path 
        d="M175 220 L190 190 C180 160 190 140 200 140 C210 140 220 160 210 190 L225 220" 
        fill="none" 
        stroke={accentColor} 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#bulbGlow)"
        animate={{
          strokeWidth: [3.5, 4.5, 3.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </g>

    {/* Interactive Figures looking at the giant bulb */}
    <g transform="translate(80, 260)">
      <circle cx="15" cy="15" r="7" fill={accentColor} />
      <path d="M5 30 C5 24 10 24 15 24 C20 24 25 24 25 30 L25 60 L5 60 Z" fill="rgba(255,255,255,0.8)" />
      <line x1="20" y1="35" x2="35" y2="20" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>

    <g transform="translate(290, 260)">
      <circle cx="15" cy="15" r="7" fill={accentColor} />
      <path d="M5 30 C5 24 10 24 15 24 C20 24 25 24 25 30 L25 60 L5 60 Z" fill="rgba(255,255,255,0.8)" />
      <line x1="10" y1="35" x2="-5" y2="20" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

const CaseStudy = ({
  accentColor = "#c5d429",
  problemTitle = "PROBLEM STATEMENT",
  problemDesc = "",
  problemPoints = [],
  problemConclusion = "",
  solutionTitle = "PROPOSED SOLUTION",
  solutionDesc = "",
  solutionFeatures = [], // Array of { title, points: [] }
  processTitle = "PRODUCTION PROCESS",
  processSteps = [] // Array of { title, subtitle, desc, icon: LucideIcon }
}) => {
  return (
    <div style={{ marginTop: "6rem", marginBottom: "8rem" }}>
      
      {/* Decorative Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "6rem" }}>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${accentColor}55)` }} />
        <span style={{ 
          fontSize: "0.85rem", 
          letterSpacing: "0.4em", 
          textTransform: "uppercase", 
          color: accentColor, 
          fontWeight: 700 
        }}>
          CASE STUDY
        </span>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${accentColor}55, transparent)` }} />
      </div>

      {/* Grid container for Problem Statement */}
      <section style={{ 
        minHeight: "auto", 
        padding: "3rem 0", 
        display: "grid", 
        gridTemplateColumns: "1fr 1.2fr", 
        gap: "4rem", 
        alignItems: "center" 
      }} className="case-study-grid">
        <style>{`
          @media (max-width: 900px) {
            .case-study-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .case-study-reverse {
              flex-direction: column-reverse !important;
            }
          }
        `}</style>

        {/* Left Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ClipboardIllustration accentColor={accentColor} />
        </motion.div>

        {/* Right Side: Text details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ 
              background: `${accentColor}15`, 
              color: accentColor, 
              padding: "0.4rem 0.8rem", 
              borderRadius: "8px", 
              fontSize: "0.8rem", 
              fontWeight: 800 
            }}>
              01
            </span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.02em", color: accentColor, textTransform: "uppercase" }}>
              {problemTitle}
            </h3>
          </div>
          
          <p style={{ fontSize: "1.05rem", color: "var(--text-color)", lineHeight: 1.7, fontWeight: 500 }}>
            {problemDesc}
          </p>

          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {problemPoints.map((pt, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <span style={{ color: accentColor, marginTop: "0.2rem", fontWeight: "bold" }}>•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {problemConclusion && (
            <div style={{ 
              marginTop: "1rem", 
              padding: "1.2rem", 
              borderRadius: "16px", 
              background: "rgba(255,255,255,0.01)", 
              borderLeft: `4px solid ${accentColor}`,
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6
            }}>
              <strong>Impact:</strong> {problemConclusion}
            </div>
          )}
        </motion.div>
      </section>

      {/* Grid container for Proposed Solution */}
      <section style={{ 
        minHeight: "auto", 
        padding: "5rem 0", 
        display: "grid", 
        gridTemplateColumns: "1.2fr 1fr", 
        gap: "4rem", 
        alignItems: "center" 
      }} className="case-study-grid">
        
        {/* Left Side: Text details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ 
              background: `${accentColor}15`, 
              color: accentColor, 
              padding: "0.4rem 0.8rem", 
              borderRadius: "8px", 
              fontSize: "0.8rem", 
              fontWeight: 800 
            }}>
              02
            </span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.02em", color: accentColor, textTransform: "uppercase" }}>
              {solutionTitle}
            </h3>
          </div>

          <p style={{ fontSize: "1.05rem", color: "var(--text-color)", lineHeight: 1.7, fontWeight: 500 }}>
            {solutionDesc}
          </p>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
            gap: "1.5rem", 
            marginTop: "1rem" 
          }}>
            {solutionFeatures.map((feature, idx) => (
              <div key={idx} style={{ 
                padding: "1.5rem", 
                borderRadius: "20px", 
                background: "rgba(255,255,255,0.01)", 
                border: "1px solid rgba(255,255,255,0.03)" 
              }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: "#fff" }}>
                  {feature.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {feature.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      <Check size={14} color={accentColor} style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LightbulbIllustration accentColor={accentColor} />
        </motion.div>
      </section>

      {/* Design / Production Process Flow */}
      <section style={{ minHeight: "auto", padding: "5rem 0 2rem 0" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ 
            background: `${accentColor}15`, 
            color: accentColor, 
            padding: "0.4rem 0.8rem", 
            borderRadius: "8px", 
            fontSize: "0.8rem", 
            fontWeight: 800,
            display: "inline-block",
            marginBottom: "1rem"
          }}>
            03
          </span>
          <h3 style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#fff", textTransform: "uppercase" }}>
            {processTitle}
          </h3>
        </div>

        {/* Timeline Steps */}
        <div style={{ 
          position: "relative",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-start",
          width: "100%",
          gap: "1.5rem",
          flexWrap: "wrap"
        }} className="process-flow-container">
          <style>{`
            @media (max-width: 768px) {
              .process-flow-container {
                flex-direction: column !important;
                align-items: center !important;
              }
              .process-step-card {
                width: 100% !important;
                max-width: 400px;
                text-align: center;
              }
              .process-separator {
                transform: rotate(90deg) !important;
                margin: 0.5rem 0 !important;
              }
            }
          `}</style>

          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <motion.div 
                  className="process-step-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  style={{ 
                    flex: 1, 
                    minWidth: "160px", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <div style={{ 
                    position: "relative",
                    width: "70px", 
                    height: "70px", 
                    borderRadius: "50%", 
                    background: "rgba(255,255,255,0.02)", 
                    border: `2px solid ${accentColor}55`,
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    marginBottom: "1.2rem",
                    boxShadow: `0 0 15px ${accentColor}11`,
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.boxShadow = `0 0 25px ${accentColor}33`;
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${accentColor}55`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${accentColor}11`;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  >
                    {StepIcon && <StepIcon size={28} color={accentColor} />}
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
                    {step.title}
                  </h4>
                  <span style={{ fontSize: "0.75rem", color: accentColor, fontWeight: 700, textTransform: "uppercase", marginBottom: "0.6rem" }}>
                    {step.subtitle}
                  </span>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </motion.div>

                {/* Separator */}
                {idx < processSteps.length - 1 && (
                  <div 
                    className="process-separator"
                    style={{ 
                      alignSelf: "center", 
                      fontSize: "1.8rem", 
                      color: `${accentColor}77`, 
                      fontWeight: 300,
                      userSelect: "none"
                    }}
                  >
                    »
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      
    </div>
  );
};

export default CaseStudy;
