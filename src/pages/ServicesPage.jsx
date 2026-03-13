import Skills from "../components/Skills";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "../components/Magnetic";
import CoreCapabilities from "../components/CoreCapabilities";
import Process from "../components/Process";

const ServicesPage = () => {
  return (
    <PageTransition>
      <div style={{ position: "relative" }}>
        {/* Background Atmosphere removed as it is now global */}

        {/* Hero Header Section */}
        <section
          style={{
            paddingTop: "14rem",
            paddingBottom: "8rem",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
          }}
        >
          <div className="container">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
              Excellence Reimagined
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                fontWeight: 900,
              }}
            >
              OUR FULL
              <br />
              <span className="gradient-text">SPECTRUM</span> OF
              <br />
              EXPERIENCES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                marginTop: "3rem",
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              We don't just provide services; we craft journeys. From the first
              spark of an idea to the final standing ovation, we are your
              partners in creating the extraordinary.
            </motion.p>
          </div>
        </section>

        {/* Skills / Services List Section */}
        <Skills />

        {/* Core Capabilities Section: The Tech Stack */}
        <CoreCapabilities />

        {/* Process Section */}
        <Process />

        {/* Final CTA: Mega Impact */}
        <section className="cta-section" style={{ padding: "8rem 0", position: "relative" }}>
          <style>{`
            @media (max-width: 768px) {
              .cta-section {
                padding: 4rem 0 !important;
              }
              .cta-card {
                padding: 4rem 1.5rem !important;
              }
              .cta-button {
                padding: 1.2rem 2.5rem !important;
                font-size: 1rem !important;
                width: 100% !important;
                justify-content: center !important;
              }
              .cta-button div {
                width: 30px !important;
                height: 30px !important;
                font-size: 1.2rem !important;
              }
            }
          `}</style>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cta-card"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(30px)",
                borderRadius: "40px",
                padding: "6rem 4rem",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 120px rgba(0,0,0,0.5)",
              }}
            >
              {/* Dynamic Animated Background Orbs removed to allow global merge */}

              <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.6rem 1.2rem",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#39b54a",
                      boxShadow: "0 0 10px #39b54a",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Inquiries open
                  </span>
                </motion.div>

                <h2
                  style={{
                    fontSize: "clamp(2.5rem, 10vw, 6rem)",
                    lineHeight: 0.85,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    marginBottom: "3rem",
                  }}
                >
                  LET'S <span className="gradient-text">COLORIFY</span>YOUR
                  WORLD
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Link to="/contactnow" style={{ textDecoration: "none" }}>
                    <Magnetic>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cta-button"
                        style={{
                          padding: "2rem 5rem",
                          borderRadius: "100px",
                          background: "#fff",
                          color: "#000",
                          fontWeight: 900,
                          fontSize: "1.4rem",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 30px 60px rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          gap: "1.5rem",
                        }}
                      >
                        START A PROJECT
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#000",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                          }}
                        >
                          →
                        </div>
                      </motion.button>
                    </Magnetic>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spacer */}
        <div style={{ height: "5vh" }} />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
