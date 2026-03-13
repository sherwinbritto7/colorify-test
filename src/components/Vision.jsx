import { motion } from "framer-motion";

const ImpactStat = ({ value, label, color }) => (
  <div style={{ marginBottom: "2rem" }}>
    <motion.h4
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{
        fontSize: "2.5rem",
        fontWeight: 800,
        color: "#fff",
        margin: 0,
        lineHeight: 1,
      }}
    >
      {value}
    </motion.h4>
    <p
      style={{
        color,
        fontWeight: 700,
        fontSize: "0.8rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        margin: "0.2rem 0 0 0",
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
        @media (max-width: 768px) {
          .vision-section {
            padding: 6rem 0 !important;
          }
           .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .impact-stats-row {
            flex-direction: column !important;
            gap: 2rem !important;
            margin-top: 3rem !important;
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
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
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
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            Colorify is a high-octane creative collective dedicated to
            dismantling the ordinary. We treat every venue as a canvas where
            light, sound, and strategy collide to create core memories.
          </p>

          <div 
            className="impact-stats-row"
            style={{ display: "flex", gap: "4rem", marginTop: "4rem" }}
          >
            <ImpactStat value="500+" label="Events Delivered" color="#39b54a" />
            <ImpactStat value="2M+" label="Attendee Reach" color="#29abe2" />
            <ImpactStat value="24/7" label="Global Support" color="#7b3f9e" />
          </div>
        </motion.div>

        {/* Right Side: Image with Mask/Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="vision-image-container"
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              background: "linear-gradient(135deg, #c5d42933, #7b3f9e33)",
              filter: "blur(40px)",
              borderRadius: "40px",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: "40px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              zIndex: 1,
              aspectRatio: "4/5",
            }}
          >
            <motion.img
              src="/images/vision.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
            />
            {/* Glass Overlay on image bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "2rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                "The future of events lies in the intersection of digital
                precision and human connection."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
