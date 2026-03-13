import { motion, useScroll, useTransform } from "framer-motion";
import { MousePointer2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 250]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  // Custom scroll exit: Zoom In + Blur + Fade
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.2]);
  const blur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(20px)"]);
  const rotateX = useTransform(scrollY, [0, 600], [0, 15]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "12vh",
        paddingBottom: "5vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 18vh !important;
            padding-bottom: 6rem !important;
            min-height: 100vh !important;
            display: flex !important;
            align-items: center !important;
          }
          .hero-header {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 4rem !important;
            margin-bottom: 3rem !important;
          }
          .hero-title {
            font-size: clamp(3rem, 15vw, 5rem) !important;
            line-height: 0.9 !important;
          }
          .hero-button-container {
            margin-bottom: 0 !important;
            transform: scale(0.9);
          }
          .hero-button {
            width: 140px !important;
            height: 140px !important;
            font-size: 0.85rem !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
          }
          .hero-desc-bar {
            justify-content: center !important;
            text-align: center !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding-top: 2rem !important;
          }
          .hero-desc {
            max-width: 100% !important;
            font-size: 1rem !important;
            opacity: 0.8;
            line-height: 1.5 !important;
          }
          .hero-orb-1 {
            width: 80vw !important;
            height: 80vw !important;
            filter: blur(80px) !important;
            opacity: 0.3 !important;
          }
          .hero-orb-2 {
            width: 70vw !important;
            height: 70vw !important;
            filter: blur(80px) !important;
            opacity: 0.2 !important;
          }
        }
      `}</style>
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <motion.div
          style={{ opacity, scale, rotateX, perspective: 1000 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline & Button Row */}
          <div
            className="hero-header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
              gap: "2rem",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 2,
            }}
          >
            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                lineHeight: 0.82,
                letterSpacing: "-0.05em",
                fontWeight: 900,
                margin: 0,
                position: "relative",
                zIndex: 2,
              }}
            >
              <div style={{ overflow: "hidden", padding: "0.05em 0.1em", margin: "-0.05em -0.1em" }}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.1,
                  }}
                  style={{ display: "block", color: "white" }}
                >
                  WE
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.2,
                }}
                style={{
                  display: "block",
                  filter: "drop-shadow(0 0 20px rgba(0, 169, 157, 0.1))",
                  padding: "0.05em 0.1em",
                }}
              >
                <span
                  className="gradient-text"
                  style={{ display: "inline-block" }}
                >
                  COLORIFY
                </span>
              </motion.div>

              <div style={{ overflow: "hidden", padding: "0.05em 0.1em", margin: "-0.05em -0.1em" }}>
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.3,
                  }}
                  style={{ display: "block", color: "white" }}
                >
                  MOMENTS
                </motion.span>
              </div>
            </h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 1,
                delay: 1.2,
              }}
              className="hero-button-container"
              style={{ marginBottom: "2vw", position: "relative" }}
            >
              <Link to="/contactnow" style={{ textDecoration: "none" }}>
                <Magnetic>
                  <div style={{ position: "relative" }}>
                    {/* Keeping the glow with the button for focus */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)",
                        filter: "blur(30px)",
                        zIndex: 0,
                      }}
                    />
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        background:
                          "linear-gradient(135deg, #c5d429, #00a99d, #7b3f9e)",
                        color: "#fff",
                        border: "1px solid transparent",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="hero-button"
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "160px",
                        height: "160px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(100px)",
                        color: "white",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                      }}
                    >
                      Start Project
                    </motion.button>
                  </div>
                </Magnetic>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Bar: Description */}
          <div
            className="hero-desc-bar"
            style={{
              display: "flex",
              // borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.p
              className="hero-desc"
              style={{
                fontSize: "1.2rem",
                color: "var(--text-secondary)",
                maxWidth: "450px",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We are an exclusive event management agency orchestrating
              immersive, high-end experiences that elevate your brand and
              captivate your audience.
            </motion.p>
          </div>

          {/* Dynamic Liquid Floating Background Elements - Moved inside to follow zoom/blur */}
          <motion.div
            animate={{
              x: [0, 50, -20, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
            className="hero-orb-1"
            style={{
              position: "absolute",
              top: "0%",
              right: "-10%",
              width: "60vw",
              height: "60vw",
              maxWidth: "800px",
              maxHeight: "800px",
              background:
                "radial-gradient(circle, #00a99d 0%, transparent 60%)",
              filter: "blur(140px)",
              opacity: 0.2,
              zIndex: 0,
              y: y1,
            }}
          />

          <motion.div
            animate={{
              x: [0, -50, 20, 0],
              y: [0, 40, -30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2,
            }}
            className="hero-orb-2"
            style={{
              position: "absolute",
              bottom: "0%",
              left: "-10%",
              width: "50vw",
              height: "50vw",
              maxWidth: "600px",
              maxHeight: "600px",
              background:
                "radial-gradient(circle, #7b3f9e 0%, transparent 60%)",
              filter: "blur(120px)",
              opacity: 0.15,
              zIndex: 0,
              y: y2,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
