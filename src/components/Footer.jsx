import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { Instagram, Twitter, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "6rem 0 3rem",
        background: "rgba(0,0,0,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .brand-col {
            grid-column: span 1 !important;
            text-align: center !important;
          }
          .brand-col p {
            max-width: 100% !important;
            margin: 0 auto 2rem !important;
          }
          .brand-col .hq-block {
            align-items: center !important;
            text-align: center !important;
            margin-top: 1rem !important;
            gap: 0.25rem !important;
          }
          .brand-col .hq-block p {
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 0 !important;
          }
          .footer-nav-col {
            text-align: center !important;
          }
          .social-col {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
          .footer-links {
            justify-content: center !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "4rem",
            marginBottom: "6rem",
          }}
        >
          {/* Brand Column */}
          <div className="brand-col" style={{ gridColumn: "span 2" }}>
            <Link
              to="/"
              style={{ display: "inline-block", marginBottom: "2rem" }}
            >
              <img
                src="/logo.jpg"
                alt="Colorify"
                style={{
                  height: "40px",
                  borderRadius: "8px",
                  filter: "brightness(1.1)",
                }}
              />
            </Link>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "350px",
                marginBottom: "2rem",
              }}
            >
              We don't just plan events - we architect atmosphere. Explore our
              latest flagship productions and color your world.
            </p>
            <div
              className="hq-block"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--brand-yellow)",
                  marginBottom: "0.5rem",
                }}
              >
                Our HQ
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  maxWidth: "300px",
                }}
              >
                Crystal Palace, Malad West,
                <br />
                Mumbai - 400064
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col">
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "2rem",
                color: "var(--brand-teal)",
              }}
            >
              Navigation
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {["Home", "Portfolio", "Services", "About", "Contact Now"].map(
                (item) => (
                  <Link
                    key={item}
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Social Column */}
          <div className="social-col">
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "2rem",
                color: "var(--brand-purple)",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                { icon: Instagram, color: "#7b3f9e" },
                { icon: Twitter, color: "#c5d429" },
                { icon: Linkedin, color: "#00a99d" },
                { icon: Send, color: "#29abe2" },
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, color: social.color }}
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            © {new Date().getFullYear()} COLORIFY MEDIA
          </div>
          <div
            className="footer-links"
            style={{ display: "flex", gap: "3rem", fontSize: "0.85rem" }}
          >
            <Link
              to="/"
              style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
