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
  { logo: eggfirst,   name: "Eggfirst" },
  { logo: groupm,     name: "GroupM" },
  { logo: ibs,        name: "IBS Fulcro" },
  { logo: invnt,      name: "INVNT" },
  { logo: mc,         name: "M+C Saatchi" },
  { logo: mindshare,  name: "Mindshare" },
  { logo: omg,        name: "OMG" },
  { logo: tribes,     name: "Tribes" },
  { logo: verge,      name: "Verge" },
  { logo: wpp,        name: "WPP" },
];

const AgencyPartners = () => {
  return (
    <section
      className="agency-section"
      style={{
        padding: "7rem 0",
        background: "rgba(0,0,0,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* subtle grid texture overlay */
        .agency-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(41,171,226,0.05) 0%, transparent 60%),
                            radial-gradient(circle at 80% 50%, rgba(123,63,158,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .agency-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .agency-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 600px) {
          .agency-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }

        .agency-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          padding: 2rem 1.25rem 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          cursor: default;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .agency-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
          pointer-events: none;
          border-radius: inherit;
        }
        .agency-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        .agency-card-logo {
          height: 52px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          opacity: 0.82;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .agency-card:hover .agency-card-logo {
          opacity: 1;
          transform: scale(1.05);
        }

        .agency-card-name {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-align: center;
          transition: color 0.3s ease;
        }
        .agency-card:hover .agency-card-name {
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 600px) {
          .agency-card {
            padding: 1.4rem 0.9rem 1.1rem;
          }
          .agency-card-logo {
            height: 38px;
          }
        }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "var(--brand-yellow)",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
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
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            AGENCY <span className="gradient-text">PARTNERS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              marginTop: "1.2rem",
              color: "var(--text-secondary)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "1.2rem auto 0",
              lineHeight: 1.6,
            }}
          >
            Collaborating with the world's leading creative and media agencies to deliver extraordinary results.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="agency-cards-grid">
          {agencyList.map(({ logo, name }, index) => (
            <motion.div
              key={index}
              className="agency-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <img
                src={logo}
                alt={name}
                className="agency-card-logo"
              />
              <span className="agency-card-name">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyPartners;
