import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Layers, Zap, Globe } from "lucide-react";

const CoreCapabilities = () => {
  const capabilitiesRef = useRef(null);
  const { scrollYProgress: capabilitiesScroll } = useScroll({
    target: capabilitiesRef,
    offset: ["start end", "end start"]
  });

  const capabilitiesX = useTransform(capabilitiesScroll, [0, 1], [0, -400]);
  const capabilitiesOpacity = useTransform(capabilitiesScroll, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section 
      ref={capabilitiesRef}
      className="capabilities-section"
      style={{ padding: "0 0 12rem", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .capability-card-span-3 {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 768px) {
          .capabilities-section {
            padding: 0 0 6rem !important;
          }
          .parallax-text {
            display: none !important;
          }
          .capabilities-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .capability-card {
            padding: 2.5rem 1.5rem !important;
          }
          .capability-card-span-3 {
            grid-column: span 1 !important;
          }
        }
      `}</style>
      {/* Enhanced Parallax Background Text */}
      <motion.div
        className="parallax-text"
        style={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          fontSize: "18vw",
          fontWeight: 900,
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          color: "transparent",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
          x: capabilitiesX,
          opacity: capabilitiesOpacity
        }}
      >
        PRECISION TECH STACK
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "8rem", position: "relative" }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              color: "var(--brand-purple)",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Our Edge
          </motion.span>
          <h2 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em" }}>
            CORE <span className="gradient-text">CAPABILITIES</span>
          </h2>
        </div>

        <div
          className="capabilities-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.5rem",
          }}
        >
          {[
            {
              number: "01",
              title: "Neural AV Design",
              desc: "Sensory-mapped audio-visual environments that adapt in real-time to crowd kinetics and energy flow.",
              icon: Cpu,
              color: "#00a99d"
            },
            {
              number: "02",
              title: "Kinetic Stagecraft",
              desc: "Moving architectural elements and robotic staging that physically redefine the space mid-performance.",
              icon: Layers,
              color: "#7b3f9e"
            },
            {
              number: "03",
              title: "Strategic Lighting",
              desc: "Psychology-driven illumination systems designed to influence mood, focus, and crowd navigation.",
              icon: Zap,
              color: "#c5d429"
            },
            {
              number: "04",
              title: "Digital Integration",
              desc: "Hybrid ecosystems that blend high-speed streaming with immersive physical presence seamlessly.",
              icon: Globe,
              color: "#29abe2"
            }
          ].map((cap, i) => (
            <motion.div
              key={i}
              className={`capability-card ${i === 3 ? "capability-card-span-3" : ""}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02 }}
              style={{
                padding: "3rem",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
                gridColumn: i === 3 ? "span 3" : "auto"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cap.color + "60";
                e.currentTarget.style.background = cap.color + "08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-2rem",
                  right: "2rem",
                  fontSize: "6rem",
                  fontWeight: 900,
                  color: cap.color,
                  opacity: 0.1,
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {cap.number}
              </div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: cap.color + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: cap.color,
                  marginBottom: "2rem",
                  boxShadow: `0 10px 30px ${cap.color}20`
                }}
              >
                <cap.icon size={30} />
              </div>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em"
                }}
              >
                {cap.title}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                {cap.desc}
              </p>

              {/* Subtle corner glow */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  right: "-15%",
                  width: "150px",
                  height: "150px",
                  background: cap.color,
                  filter: "blur(60px)",
                  pointerEvents: "none"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
