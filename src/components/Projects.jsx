import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vivid Gala 2024",
    category: "Gala Dinners",
    color: "#7b3f9e", // Purple
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
    size: "large",
  },
  {
    title: "Prism Workshop",
    category: "Creative Meetups",
    color: "#00a99d", // Teal
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    title: "Urban Carnival",
    category: "Themed Parties",
    color: "#39b54a", // Green
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`project-card ${project.size}`}
      style={{
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        cursor: "pointer",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        height:
          project.size === "large"
            ? "640px"
            : project.size === "medium"
              ? "420px"
              : "300px",
        gridColumn: project.size === "large" ? "span 2" : "span 1",
        gridRow: project.size === "large" ? "span 2" : "span 1",
      }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.7,
        }}
        whileHover={{ scale: 1.05, opacity: 0.9 }}
        transition={{ duration: 0.6 }}
      />

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, ${project.color}dd, transparent)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "2.5rem",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#000",
                marginBottom: "0.5rem",
              }}
            >
              {project.category}
            </p>
            <h3
              className={project.size === "large" ? "project-title-large" : ""}
              style={{
                fontSize: project.size === "large" ? "3rem" : "1.8rem",
                fontWeight: 800,
                color: "#000",
                lineHeight: 1,
              }}
            >
              {project.title}
            </h3>
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <ArrowUpRight size={24} />
          </div>
        </div>
      </motion.div>

      {/* Static Label (Lower visibility) */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {project.category}
        </span>
        <h4 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>
          {project.title}
        </h4>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{ padding: "8rem 0", background: "rgba(0,0,0,0.2)" }}
    >
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
            gap: 1rem !important;
          }
          .project-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 400px !important;
          }
          .project-title-large {
            font-size: 2rem !important;
          }
        }
      `}</style>
      <div className="container">
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "1rem 2rem",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            View More <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "minmax(300px, auto)",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
