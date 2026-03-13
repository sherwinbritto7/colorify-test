import { motion } from "framer-motion";
import { Search, Compass, Zap, CheckCircle } from "lucide-react";

const ProcessStep = ({ icon: Icon, title, desc, number, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -15, scale: 1.02 }}
    className="process-step"
    style={{
      position: "relative",
      padding: "3rem",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "32px",
      border: "1px solid rgba(255,255,255,0.05)",
      flex: "1 1 300px",
      overflow: "hidden",
      transition: "border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
      backdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = color + "60";
      e.currentTarget.style.background = color + "08";
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
        color: color,
        opacity: 0.1,
        lineHeight: 1,
        pointerEvents: "none",
      }}
    >
      {number}
    </div>
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "18px",
        background: `${color}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
        marginBottom: "2rem",
        boxShadow: `0 10px 30px ${color}20`
      }}
    >
      <Icon size={30} />
    </div>
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
      {title}
    </h3>
    <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, flexGrow: 1 }}>{desc}</p>
    
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{
        position: "absolute",
        bottom: "-15%",
        right: "-15%",
        width: "150px",
        height: "150px",
        background: color,
        filter: "blur(60px)",
        pointerEvents: "none"
      }}
    />
  </motion.div>
);

const Process = () => {
  return (
    <section className="process-section" style={{ padding: "12rem 0", position: "relative" }}>
      <style>{`
        @media (max-width: 768px) {
          .process-section {
            padding: 6rem 0 !important;
          }
          .process-container {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .process-step {
            padding: 2.5rem 1.5rem !important;
            flex: 1 1 auto !important;
          }
        }
      `}</style>
      <div className="container">
        <div style={{ marginBottom: "8rem" }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              color: "var(--brand-teal)",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            The Blueprint
          </motion.span>
          <h2
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.04em"
            }}
          >
            HOW WE <span className="gradient-text">DELIVER</span> SUCCESS
          </h2>
        </div>

        <div className="process-container" style={{ position: "relative", display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "stretch" }}>
          <ProcessStep
            number="01"
            icon={Search}
            title="Discovery"
            desc="We dive deep into your goals, audience, and brand DNA to build a solid foundation."
            color="#00a99d"
          />
          <ProcessStep
            number="02"
            icon={Compass}
            title="Strategy"
            desc="Our creative minds map out a comprehensive plan combining artistry with logistical precision."
            color="#7b3f9e"
          />
          <ProcessStep
            number="03"
            icon={Zap}
            title="Execution"
            desc="This is where the magic happens. We bring the vision to life with world-class tech."
            color="#c5d429"
          />
          <ProcessStep
            number="04"
            icon={CheckCircle}
            title="Evaluation"
            desc="We measure impact and gather insights to ensure every event leaves a legacy."
            color="#29abe2"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
