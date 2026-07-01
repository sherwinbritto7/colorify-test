import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import selected1 from "../assets/photos/selected/selected1.png";
import selected2 from "../assets/photos/selected/selected2.jpeg";
import selected3 from "../assets/photos/selected/selected3.jpeg";
import selected4 from "../assets/photos/selected/selected4.jpeg";
import selected5 from "../assets/photos/selected/selected5.png";

const projectsList = [
  {
    title: "Alia Teaser",
    category: "Teaser",
    color: "#39b54a",
    image: selected1,
    videoUrl: "https://youtu.be/y0LYbOgVLMU?si=skXiXmwcXAS-zete",
    type: "youtube"
  },
  {
    title: "Virat (HSBC)",
    category: "Brand Campaign",
    color: "#c5d429",
    image: selected3,
    videoUrl: "https://www.youtube.com/embed/dztEYDEQo_Y?autoplay=1&mute=1&controls=1",
    type: "youtube-shorts"
  },
  {
    title: "Infinite Saree",
    category: "Fashion Film",
    color: "#7b3f9e",
    image: selected2,
    videoUrl: "https://www.youtube.com/embed/Jxy4f8JVM34?autoplay=1&mute=1&controls=1",
    type: "youtube-shorts"
  },
  {
    title: "Fashion AI",
    category: "AI Filmmaking",
    color: "#29abe2",
    image: selected4,
    videoUrl: "https://www.youtube.com/embed/SUqTDeoURkQ?autoplay=1&mute=1&controls=1",
    type: "youtube-shorts"
  },
  {
    title: "RCB Sunpharma",
    category: "Commercial",
    color: "#f26522",
    image: selected5,
    videoUrl: "https://www.youtube.com/embed/aIvUKy1sCms?autoplay=1&mute=1&controls=1",
    type: "youtube-shorts"
  },
];

/* ── Modal (same as horizontal projects) ─────────────────── */
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
              width: item.type === "youtube-shorts" || item.type === "instagram" ? "340px" : "min(1000px, 92vw)",
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
              {item.videoUrl ? (
                <div style={{ position: "relative", width: "100%", aspectRatio: item.type === "youtube-shorts" || item.type === "instagram" ? "9/16" : "16/9", maxHeight: "80vh", display: "flex", justifyContent: "center", background: "transparent", overflow: "hidden" }}>
                  {item.type === "youtube" && (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoUrl.split('/').pop().split('?')[0]}?autoplay=1&mute=1&controls=1&rel=0`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", aspectRatio: "16/9", border: "none" }}
                    />
                  )}
                  {item.type === "youtube-shorts" && (
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ height: "80vh", width: "340px", aspectRatio: "9/16", border: "none" }}
                    />
                  )}
                  {item.type === "gdrive" && (
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      frameBorder="0"
                      allow="autoplay"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", aspectRatio: "16/9", border: "none" }}
                    />
                  )}
                  {item.type === "instagram" && (
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      frameBorder="0"
                      allowTransparency
                      scrolling="no"
                      style={{ height: "80vh", width: "340px", aspectRatio: "9/16", border: "none", background: "transparent" }}
                    />
                  )}
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

/* ── Project Card Component ──────────────────────────────── */
const ProjectCard = ({ project, index, sizeStyle, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        cursor: "pointer",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        height: sizeStyle.height || "auto",
        aspectRatio: sizeStyle.aspectRatio || "auto",
        gridColumn: sizeStyle.gridColumn,
      }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          opacity: 0.7,
        }}
        whileHover={{ scale: 1.05, opacity: 0.9 }}
        transition={{ duration: 0.6 }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Static Label & Button Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: sizeStyle.isLarge ? "4rem" : "2.5rem",
          left: sizeStyle.isLarge ? "4rem" : "2.5rem",
          right: sizeStyle.isLarge ? "4rem" : "2.5rem",
          color: "white",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.75rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "0.6rem",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: project.color,
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {project.category}
            </span>
          </div>
          <h3
            style={{
              fontSize: sizeStyle.isLarge ? "clamp(1.8rem, 4vw, 3rem)" : "1.4rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: project.color,
            color: "#000",
          }}
          style={{
            width: sizeStyle.isLarge ? "50px" : "42px",
            height: sizeStyle.isLarge ? "50px" : "42px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "transparent",
            color: "white",
            fontSize: sizeStyle.isLarge ? "1.2rem" : "1.05rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        >
          →
        </motion.button>
      </div>
    </motion.div>
  );
};

/* ── Main Projects Component ────────────────────────────── */
const Projects = () => {
  const [selected, setSelected] = useState(null);

  // Alignments definition (3-column layout):
  // Row 1: 1st card (span 2), 2nd card (span 1)
  // Row 2: 3rd, 4th, 5th cards (span 1 each)
  const getCardSizeStyle = (index) => {
    if (index === 0) {
      return {
        gridColumn: "span 2",
        height: "550px",
        isLarge: true,
      };
    }
    return {
      gridColumn: "span 1",
      height: "550px",
      isLarge: false,
    };
  };

  return (
    <section
      id="projects"
      className="projects-section"
      style={{ padding: "10rem 0 8rem", background: "rgba(0,0,0,0.2)" }}
    >
      <Modal item={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 0 !important;
          }
          .projects-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .project-card {
            grid-column: span 1 !important;
            height: 400px !important;
          }
        }
      `}</style>
      <div style={{ width: "100%", padding: "0 5vw" }}>
        <div
          className="projects-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{
                color: "var(--brand-teal)",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Recent Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              SELECTED <span className="gradient-text">PROJECTS</span>
            </motion.h2>
          </div>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {projectsList.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              sizeStyle={getCardSizeStyle(i)}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
