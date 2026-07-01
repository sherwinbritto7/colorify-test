import { motion } from "framer-motion";

// Import logos
import adityabirla from "../assets/photos/logos/adityabirla.png";
import hsbc from "../assets/photos/logos/hsbc.png";
import ikea from "../assets/photos/logos/ikea.png";
import nykaa from "../assets/photos/logos/nykaa.png";
import reliance from "../assets/photos/logos/reliance.png";
import sbi from "../assets/photos/logos/sbi.png";
import taj from "../assets/photos/logos/taj.png";
import tseries from "../assets/photos/logos/tseries.png";
import gillette from "../assets/photos/logos/gillette.png";
import diageo from "../assets/photos/logos/diageo.png";
import yesbank from "../assets/photos/logos/yesbank.png";
import dbs from "../assets/photos/logos/dbs.png";
import tira from "../assets/photos/logos/tira.png";
import ctrls from "../assets/photos/logos/ctrls.png";
import waaree from "../assets/photos/logos/waaree.png";
import brettlee from "../assets/photos/logos/brettlee.png";
import chr from "../assets/photos/logos/chr.png";
import ezee from "../assets/photos/logos/ezee.png";
import integriti from "../assets/photos/logos/integriti.png";
import kay from "../assets/photos/logos/kay.png";
import laqshya from "../assets/photos/logos/laqshya.png";
import lokmat from "../assets/photos/logos/lokmat.png";
import miles from "../assets/photos/logos/miles.png";
import mirae from "../assets/photos/logos/mirae.png";
import mm from "../assets/photos/logos/mm.png";
import origem from "../assets/photos/logos/origem.png";
import pg from "../assets/photos/logos/p&g.png";
import sheth from "../assets/photos/logos/sheth.png";
import sportbet from "../assets/photos/logos/sportbet.png";
import sun from "../assets/photos/logos/sun.png";

const logosList = [
  adityabirla,
  hsbc,
  ikea,
  nykaa,
  reliance,
  sbi,
  taj,
  tseries,
  gillette,
  diageo,
  yesbank,
  dbs,
  tira,
  ctrls,
  waaree,
  brettlee,
  chr,
  ezee,
  integriti,
  kay,
  laqshya,
  lokmat,
  miles,
  mirae,
  mm,
  origem,
  pg,
  sheth,
  sportbet,
  sun,
];

const Brands = () => {
  return (
    <section
      className="brands-section"
      style={{
        padding: "6rem 0",
        background: "rgba(0,0,0,0.15)",
        position: "relative",
      }}
    >
      <style>{`
        .brands-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem 3rem;
          align-items: center;
          justify-content: center;
        }
        .brand-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc(16.666% - 2.5rem);
          max-width: calc(16.666% - 2.5rem);
          height: 110px;
        }
        .logo-item {
          max-height: 75px;
          max-width: 100%;
          object-fit: contain;
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .logo-item:hover {
          opacity: 1;
          transform: scale(1.08);
        }
        @media (max-width: 1024px) {
          .brand-logo-wrapper {
            flex: 0 0 calc(33.333% - 2rem);
            max-width: calc(33.333% - 2rem);
            height: 90px;
          }
          .logo-item {
            max-height: 60px;
          }
        }
        @media (max-width: 600px) {
          .brand-logo-wrapper {
            flex: 0 0 calc(50% - 1.5rem);
            max-width: calc(50% - 1.5rem);
            height: 75px;
          }
          .logo-item {
            max-height: 48px;
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
              color: "var(--brand-teal)",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Collaborations
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
            BRANDS WE <span className="gradient-text">WORKED</span> FOR
          </motion.h2>
        </div>

        <div className="brands-grid">
          {logosList.map((logo, index) => (
            <motion.div
              key={index}
              className="brand-logo-wrapper"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="logo-item"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
