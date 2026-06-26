import { motion } from "framer-motion";

const ImpactStat = ({ value, label, color }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <motion.h4
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        fontSize: "clamp(3rem, 5vw, 4.5rem)",
        fontWeight: 800,
        color: "#fff",
        margin: 0,
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
      }}
    >
      {value}
    </motion.h4>
    <p
      style={{
        color: color || "var(--brand-yellow)",
        fontWeight: 700,
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        margin: "0.5rem 0 0 0",
      }}
    >
      {label}
    </p>
  </div>
);

const Vision = () => {
  return (
    <section
      className="vision-section"
      style={{
        padding: "10rem 0",
        background: "rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 991px) {
          .vision-section {
            padding: 6rem 0 !important;
          }
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .stats-container {
            order: 2 !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem 1.5rem !important;
          }
          .content-container {
            order: 1 !important;
          }
          .vision-title {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, #7b3f9e22 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container vision-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Left Side: Stats (2x2 grid) */}
        <div
          className="stats-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4rem 2.5rem",
          }}
        >
          <ImpactStat value="500+" label="Events Delivered" color="var(--brand-yellow)" />
          <ImpactStat value="2M+" label="Attendee Reach" color="var(--brand-yellow)" />
          <ImpactStat value="24/7" label="Global Support" color="var(--brand-yellow)" />
          <ImpactStat value="100%" label="Client Satisfaction" color="var(--brand-yellow)" />
        </div>

        {/* Right Side: Content */}
        <motion.div
          className="content-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            style={{
              color: "var(--brand-teal)",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
            }}
          >
            Our Philosophy
          </motion.span>
          <h2
            className="vision-title"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              marginTop: "1.5rem",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontWeight: 800,
            }}
          >
            WE DON'T JUST PLAN <br />
            <span style={{ color: "var(--brand-yellow)" }}>EVENTS</span>. WE{" "}
            <br />
            <span className="gradient-text">ENGINEER</span> EMOTIONS.
          </h2>
          <p
            style={{
              marginTop: "2rem",
              color: "var(--text-secondary)",
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            Colorify is a high-octane creative collective dedicated to
            dismantling the ordinary. We treat every venue as a canvas where
            light, sound, and strategy collide to create core memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
