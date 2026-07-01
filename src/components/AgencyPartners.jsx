import { motion } from "framer-motion";

// Import agency logos
import eggfirst from "../assets/photos/agency/eggfirst.png";
import groupm from "../assets/photos/agency/groupm.jpg";
import ibs from "../assets/photos/agency/ibs.png";
import invnt from "../assets/photos/agency/invnt.png";
import mc from "../assets/photos/agency/m+c.png";
import mindshare from "../assets/photos/agency/mindshare.png";
import omg from "../assets/photos/agency/omg.png";
import tribes from "../assets/photos/agency/tribes.jpg";
import verge from "../assets/photos/agency/verge.png";
import wpp from "../assets/photos/agency/wpp.png";

const agencyList = [
  eggfirst,
  groupm,
  ibs,
  invnt,
  mc,
  mindshare,
  omg,
  tribes,
  verge,
  wpp,
];

const AgencyPartners = () => {
  return (
    <section
      className="agency-section"
      style={{
        padding: "6rem 0 3rem",
        background: "rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <style>{`
        .agency-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem 3rem;
          align-items: center;
          justify-content: center;
        }
        .agency-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc(20% - 2.5rem);
          max-width: calc(20% - 2.5rem);
          height: 100px;
        }
        .agency-logo-item {
          max-height: 70px;
          max-width: 100%;
          object-fit: contain;
          opacity: 0.85;
          transition: all 0.3s ease;
        }
        .agency-logo-item:hover {
          opacity: 1;
          transform: scale(1.08);
        }
        @media (max-width: 1024px) {
          .agency-logo-wrapper {
            flex: 0 0 calc(33.333% - 2rem);
            max-width: calc(33.333% - 2rem);
            height: 90px;
          }
          .agency-logo-item {
            max-height: 55px;
          }
        }
        @media (max-width: 600px) {
          .agency-logo-wrapper {
            flex: 0 0 calc(50% - 1.5rem);
            max-width: calc(50% - 1.5rem);
            height: 75px;
          }
          .agency-logo-item {
            max-height: 45px;
          }
        }
      `}</style>

      <div className="container">
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "var(--brand-yellow)",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Our Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            AGENCY <span className="gradient-text">PARTNERS</span>
          </motion.h2>
        </div>

        <div className="agency-grid">
          {agencyList.map((logo, index) => (
            <motion.div
              key={index}
              className="agency-logo-wrapper"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={logo}
                alt="Agency Partner Logo"
                className="agency-logo-item"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyPartners;
