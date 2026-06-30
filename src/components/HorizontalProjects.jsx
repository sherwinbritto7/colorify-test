import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import experience1 from "../assets/photos/experience/experience1.png";
import experience2 from "../assets/photos/experience/experience2.png";
import experience3 from "../assets/photos/experience/experience3.png";
import experience4 from "../assets/photos/experience/experience4.png";

const items = [
  {
    title: "BTFW BTS",
    category: "Behind The Scenes",
    color: "#39b54a",
    image: experience1,
    youtubeUrl: "https://youtu.be/RR92n6cCYl0",
  },
  {
    title: "Sun Pharma",
    category: "Corporate Events",
    color: "#7b3f9e",
    image: experience2,
    youtubeUrl: "https://youtu.be/RX_MfPQNS8Y",
  },
  {
    title: "Who's The Boss?",
    category: "Original IP",
    color: "#c5d429",
    image: experience3,
    youtubeUrl: "https://youtu.be/6jRmE8r88_I",
  },
  {
    title: "HSBC #JeetKaElaan",
    category: "Brand Campaign",
    color: "#29abe2",
    image: experience4,
    youtubeUrl: "https://youtu.be/oRTULELFrO4",
  },
];

/* ── Modal (edge-to-edge minimal player modal) ────────────── */
const Modal = ({ item, onClose }) => {
  const modalContent = (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1000px, 92vw)",
              borderRadius: "16px",
              background: "#000",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, background: "rgba(0,0,0,0.8)" }}
              onClick={onClose}
              style={{
                position: "absolute", top: "1rem", right: "1rem",
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: 0,
                zIndex: 10,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>

            {/* VIDEO / IMAGE */}
            <div style={{
              width: "100%",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              {item.youtubeUrl ? (
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeUrl.split('/').pop().split('?')[0]}?autoplay=1&mute=0&controls=1&rel=0`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

/* ── Main Component ──────────────────────────────────────── */
const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, (progress) => {
    const isMobile = window.innerWidth <= 768;
    const distance = isMobile ? -375 : -260;
    return `${progress * distance}vw`;
  });

  return (
    <>
      <Modal item={selected} onClose={() => setSelected(null)} />

      <section
        ref={targetRef}
        className="horizontal-projects-section"
        style={{
          position: "relative",
          height: "400vh",
          padding: 0,
          minHeight: "auto",
          display: "block",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .horizontal-projects-section { height: 300vh !important; }
            .horizontal-track { padding: 0 5vw !important; gap: 5vw !important; }
            .intro-block { min-width: 85vw !important; }
            .project-card { min-width: 85vw !important; height: 60vh !important; }
            .card-content { bottom: 2rem !important; left: 1.5rem !important; right: 1.5rem !important; }
            .card-btn { width: 44px !important; height: 44px !important; font-size: 1.1rem !important; }
          }
        `}</style>

        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <motion.div className="horizontal-track" style={{ x, display: "flex", gap: "2vw", padding: "0 10vw" }}>

            {/* Intro Block */}
            <div className="intro-block" style={{ minWidth: "40vw", display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "2vw" }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ color: "var(--brand-teal)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem", display: "block" }}
              >
                Portfolio
              </motion.span>
              <h2 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
                OUR <br />{" "}
                <span className="gradient-text" style={{ paddingRight: "10px" }}>EXPERIENCES</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", marginTop: "2rem", maxWidth: "400px", fontSize: "1.1rem", lineHeight: 1.6 }}>
                We don't just plan events; we architect atmosphere. Explore our latest flagship productions.
              </p>
            </div>

            {/* Project Cards */}
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="project-card"
                onClick={() => setSelected(item)}
                style={{
                  minWidth: "70vw", height: "75vh",
                  position: "relative", borderRadius: "40px", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 0.985 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img src={item.image} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} alt={item.title} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)", zIndex: 1 }} />
                <div className="card-content" style={{ position: "absolute", bottom: "4rem", left: "4rem", right: "4rem", color: "white", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "100px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "1rem" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }} />
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{item.category}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 800 }}>{item.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: item.color, color: "#000" }}
                    className="card-btn"
                    style={{ width: "60px", height: "60px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "white", fontSize: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", flexShrink: 0 }}
                  >
                    →
                  </motion.button>
                </div>
              </motion.div>
            ))}

            <div style={{ minWidth: "20vw" }} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HorizontalProjects;
