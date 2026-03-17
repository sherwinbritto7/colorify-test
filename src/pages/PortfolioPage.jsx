import { motion } from "framer-motion";
import HorizontalProjects from "../components/HorizontalProjects";
import Projects from "../components/Projects";
import PageTransition from "../components/PageTransition";

const PortfolioPage = () => {
  return (
    <PageTransition>
      <div style={{ minHeight: "100vh" }}>
        {/* Hero Section for Events */}
        <section className="portfolio-hero" style={{ paddingTop: "14rem", paddingBottom: "6rem", position: "relative" }}>
          <style>{`
            @media (max-width: 768px) {
              .portfolio-hero {
                padding-top: 10rem !important;
                padding-bottom: 4rem !important;
              }
              .portfolio-title br {
                display: none !important;
              }
              .portfolio-title {
                font-size: 3rem !important;
                line-height: 1.1 !important;
              }
            }
          `}</style>
          {/* Background Atmosphere removed as it is now global */}

          <div className="container">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                color: "var(--brand-yellow)",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="portfolio-title"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                lineHeight: 0.85,
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              MEMORABLE <br />
              <span className="gradient-text">EVENTS</span> <br />
              BEYOND LIMITS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                marginTop: "3rem",
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Discover how we transform spaces into stories. From high-octane
              music festivals to curated corporate summits, our events are
              designed to be felt, not just seen.
            </motion.p>
          </div>
        </section>

        <HorizontalProjects />

        <div style={{ marginTop: "0" }}>
          <Projects />
        </div>
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
