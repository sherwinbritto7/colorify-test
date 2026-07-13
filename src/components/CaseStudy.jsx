import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Inline Custom SVGs for Case Study Illustrations that match the requested format

const ClipboardIllustration = ({ accentColor }) => (
  <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ maxWidth: "340px", display: "block", margin: "0 auto" }}>
    <defs>
      <linearGradient id="clipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Clipboard Background Board */}
    <rect x="80" y="80" width="240" height="280" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    <rect x="100" y="110" width="200" height="220" rx="8" fill="url(#clipGrad)" opacity="0.15" />
    
    {/* Clipboard Top Clip */}
    <path d="M160 80 L160 60 C160 54 165 50 170 50 L230 50 C235 50 240 54 240 60 L240 80 Z" fill="#222" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <circle cx="200" cy="65" r="5" fill={accentColor} />

    {/* Big Red/Accent Question Mark */}
    <text x="200" y="240" fontSize="100" fontWeight="900" fill={accentColor} textAnchor="middle" filter="url(#glow)">?</text>

    {/* Lines on Clipboard */}
    <line x1="120" y1="270" x2="280" y2="270" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />
    <line x1="120" y1="295" x2="240" y2="295" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />
    <line x1="120" y1="320" x2="200" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeLinecap="round" />

    {/* Left Figure */}
    <g transform="translate(40, 200)">
      <circle cx="30" cy="50" r="12" fill={accentColor} />
      <path d="M15 75 C15 65 20 65 30 65 C40 65 45 65 45 75 L45 130 L35 130 L35 100 L25 100 L25 130 L15 130 Z" fill="rgba(255,255,255,0.8)" />
      <line x1="30" y1="75" x2="50" y2="85" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Right Figure */}
    <g transform="translate(300, 200)">
      <circle cx="30" cy="50" r="12" fill={accentColor} />
      <path d="M15 75 C15 65 20 65 30 65 C40 65 45 65 45 75 L45 130 L35 130 L35 100 L25 100 L25 130 L15 130 Z" fill="rgba(255,255,255,0.8)" />
      <line x1="30" y1="75" x2="10" y2="85" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Connective dots/dashed lines */}
    <path d="M220 50 Q280 20 340 80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6,6" />
  </svg>
);

const LightbulbIllustration = ({ accentColor }) => (
  <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ maxWidth: "340px", display: "block", margin: "0 auto" }}>
    <defs>
      <filter id="bulbGlow">
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Lightbulb outline */}
    <path d="M200 80 C130 80 110 140 110 190 C110 240 140 260 160 280 L160 310 L240 310 L240 280 C260 260 290 240 290 190 C290 140 270 80 200 80 Z" 
      fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
    
    {/* Glowing Lightbulb inner */}
    <path d="M200 100 C150 100 135 145 135 190 C135 225 155 245 175 265 L175 295 L225 295 L225 265 C245 245 265 225 265 190 C265 145 250 100 200 100 Z" 
      fill={accentColor} opacity="0.1" filter="url(#bulbGlow)" />

    {/* Lightbulb Base */}
    <rect x="170" y="310" width="60" height="10" rx="3" fill="#333" />
    <rect x="175" y="325" width="50" height="10" rx="3" fill="#222" />
    <path d="M185 338 C185 345 215 345 215 338 Z" fill="#111" />

    {/* Puzzle/Lightbulb filaments */}
    <path d="M180 190 L195 230 L205 230 L220 190" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    
    {/* Puzzle Pieces around / inside */}
    <g transform="translate(140, 130)" filter="url(#bulbGlow)" opacity="0.9">
      <path d="M0 0 L30 0 L30 10 C30 15 35 15 35 10 L35 0 L65 0 L65 30 L55 30 C50 30 50 35 55 35 L65 35 L65 65 L0 65 Z" fill={accentColor} />
    </g>

    {/* Interactive Figures */}
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

          {/* Glowing "SEE MORE" Badge overlaying the flow to match the image */}
          <div style={{
            position: "absolute",
            bottom: "-3.5rem",
            right: "5%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pointerEvents: "none"
          }}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                pointerEvents: "auto",
                background: "linear-gradient(135deg, #ff0055 0%, #7b3f9e 100%)",
                padding: "0.6rem 1.5rem",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 10px 25px rgba(255, 0, 85, 0.3)",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
              whileHover={{ scale: 1.05, translateY: -2 }}
              onClick={() => {
                const ctaElem = document.getElementById("cta-section");
                if (ctaElem) {
                  ctaElem.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>SEE MORE</span>
              <span style={{ color: "#fff", fontWeight: "bold" }}>→</span>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CaseStudy;
