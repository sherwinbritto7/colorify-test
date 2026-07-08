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

// Pure CSS marquee row — no framer-motion, no sticking
const MarqueeRow = ({ logos, direction = "left", duration = "35s" }) => {
  // Triplicate for extra safety on wide screens
  const tripled = [...logos, ...logos, ...logos];
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={`marquee-track marquee-${direction}`}
        style={{ animationDuration: duration }}
      >
        {tripled.map((logo, index) => (
          <div key={index} className="marquee-logo-slot">
            <img src={logo} alt="Brand Logo" className="logo-item" />
          </div>
        ))}
      </div>
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
        @keyframes marquee-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: max-content;
          will-change: transform;
        }
        .marquee-left {
          animation: marquee-scroll-left linear infinite;
        }
        .marquee-right {
          animation: marquee-scroll-right linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: running;
        }

        .marquee-logo-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-item {
          height: 55px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          opacity: 0.6;
          transition: opacity 0.35s ease, transform 0.35s ease, filter 0.35s ease;
          filter: grayscale(100%) brightness(0.85);
          pointer-events: none;
        }
        .marquee-logo-slot {
          pointer-events: auto;
        }
        .marquee-logo-slot:hover .logo-item {
          opacity: 1;
          transform: scale(1.1);
          filter: grayscale(0%) brightness(1);
        }

        @media (max-width: 768px) {
          .logo-item {
            height: 40px;
            max-width: 110px;
          }
          .marquee-track {
            gap: 2.5rem;
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

      {/* Three infinite scrolling rows — pure CSS, no sticking */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <MarqueeRow logos={row1} direction="left" duration="40s" />
        <MarqueeRow logos={row2} direction="right" duration="34s" />
        <MarqueeRow logos={row3} direction="left" duration="46s" />
      </div>
    </section>
  );
};

export default Brands;
