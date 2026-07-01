import Skills from "../components/Skills";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import CoreCapabilities from "../components/CoreCapabilities";
import Process from "../components/Process";
import CTA from "../components/CTA";

const ServicesPage = () => {
  return (
    <PageTransition>
      <div style={{ position: "relative" }}>
        {/* Background Atmosphere removed as it is now global */}

        {/* Hero Header Section */}
        <section
          className="services-hero"
          style={{
            paddingTop: "16vh",
            paddingBottom: "8rem",
            background: "var(--bg-color)",
          }}
        >
          <style>{`
            @media (max-width: 768px) {
              .services-hero {
                padding-top: 22vh !important;
              }
            }
          `}</style>
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

        <CTA />

        {/* Spacer */}
        <div style={{ height: "5vh" }} />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
