import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    title: "EcoTech Summit",
    category: "Corporate Events",
    color: "#39b54a", // Green
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Neon Pulse",
    category: "Music Festivals",
    color: "#7b3f9e", // Purple
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Skyline Gala",
    category: "Luxury Productions",
    color: "#c5d429", // Yellow
    image:
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Blue Horizon",
    category: "Product Launches",
    color: "#29abe2", // Blue
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  },
];

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal shift based on number of items
  // Adjust X translation slightly on mobile to account for different widths
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
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
          .horizontal-projects-section {
            height: 300vh !important;
          }
          .horizontal-track {
            padding: 0 5vw !important;
            gap: 5vw !important;
          }
          .intro-block {
            min-width: 85vw !important;
          }
          .project-card {
            min-width: 85vw !important;
            height: 60vh !important;
          }
          .card-content {
            bottom: 2rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
          }
          .card-btn {
            width: 44px !important;
            height: 44px !important;
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="horizontal-track"
          style={{ x, display: "flex", gap: "2vw", padding: "0 10vw" }}
        >
          {/* Intro Block */}
          <div
            className="intro-block"
            style={{
              minWidth: "40vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginRight: "2vw",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{
                color: "var(--brand-teal)",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Portfolio
            </motion.span>
            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              OUR <br />{" "}
              <span className="gradient-text" style={{ paddingRight: "10px" }}>
                EXPERIENCES
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                marginTop: "2rem",
                maxWidth: "400px",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              We don't just plan events; we architect atmosphere. Explore our
              latest flagship productions.
            </p>
          </div>

          {/* Project Items */}
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="project-card"
              style={{
                minWidth: "70vw",
                height: "75vh",
                position: "relative",
                borderRadius: "40px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileHover={{ scale: 0.985 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image with subtle parallax hint */}
              <motion.img
                src={item.image}
                style={{
                  width: "120%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "-10%",
                }}
                alt={item.title}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  zIndex: 1,
                }}
              />

              {/* Content Overlay */}
              <div
                className="card-content"
                style={{
                  position: "absolute",
                  bottom: "4rem",
                  left: "4rem",
                  right: "4rem",
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
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "100px",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: item.color,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      fontWeight: 800,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: item.color,
                    color: "#000",
                  }}
                  className="card-btn"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "transparent",
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    flexShrink: 0
                  }}
                >
                  →
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Outro Block / Finish Line */}
          <div style={{ minWidth: "20vw" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
