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
import futurense from "../assets/photos/logos/futurense.png";

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
  futurense,
];

// Split logos into 3 rows
const chunkSize = Math.ceil(logosList.length / 3);
const row1 = logosList.slice(0, chunkSize);
const row2 = logosList.slice(chunkSize, chunkSize * 2);
const row3 = logosList.slice(chunkSize * 2);

const MarqueeRow = ({ logos, direction = "left", speed = 35 }) => {
  // Duplicate logos to create seamless loop
  const doubled = [...logos, ...logos];
  const animateX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        animate={{ x: animateX }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          width: "max-content",
        }}
      >
        {doubled.map((logo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="Brand Logo"
              className="logo-item"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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
        .logo-item {
          height: 55px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease;
          filter: grayscale(20%);
        }
        .logo-item:hover {
          opacity: 1;
          transform: scale(1.1);
          filter: grayscale(0%);
        }
        @media (max-width: 768px) {
          .logo-item {
            height: 40px;
            max-width: 110px;
          }
        }
      `}</style>

      <div className="container" style={{ marginBottom: "4rem" }}>
        <div style={{ textAlign: "center" }}>
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
      </div>

      {/* Three infinite scrolling rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <MarqueeRow logos={row1} direction="left" speed={38} />
        <MarqueeRow logos={row2} direction="right" speed={32} />
        <MarqueeRow logos={row3} direction="left" speed={42} />
      </div>
    </section>
  );
};

export default Brands;
