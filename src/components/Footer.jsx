import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const WhatsappIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.017 14.12 1.01 11.5 1.01c-5.448 0-9.886 4.372-9.89 9.802 0 1.964.516 3.868 1.5 5.58L2.082 20.25l4.565-1.096zM15.286 13c-.224-.112-1.324-.653-1.527-.728-.204-.075-.353-.112-.5.112-.149.224-.576.728-.707.877-.13.149-.26.168-.485.056-.225-.112-.95-.35-1.81-1.12-.669-.597-1.12-1.335-1.251-1.56-.13-.224-.014-.346.098-.458.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374.075-.15.038-.281-.019-.393-.056-.112-.5-1.207-.684-1.65-.18-.432-.363-.373-.5-.38-.13-.006-.279-.008-.428-.008-.15 0-.393.056-.598.28-.205.225-.783.765-.783 1.866s.8 2.163.912 2.313c.112.15 1.573 2.4 3.81 3.367.532.23 1.01.383 1.356.493.535.17 1.022.146 1.408.089.43-.064 1.324-.54 1.512-1.063.187-.522.187-.97.13-1.063-.056-.093-.205-.15-.43-.262z" />
  </svg>
);

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
                  marginBottom: "1rem",
                }}
              >
                Crystal Palace, Malad West,
                <br />
                Mumbai - 400064
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--brand-teal)",
                  marginBottom: "0.5rem",
                }}
              >
                Contact
              </p>
              <a
                href="https://wa.me/919892282218"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#25D366")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.5)")
                }
              >
                Whatsapp - 98922 82218
              </a>
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
                { icon: Instagram, url: "https://www.instagram.com/colorify.media?igsh=MTFxcXBwYW5renJ3OA%3D%3D&utm_source=qr", color: "#e1306c" },
                { icon: Facebook, url: "https://www.facebook.com/share/1BkNt1L3b3/?mibextid=wwXIfr", color: "#1877f2" },
                { icon: Linkedin, url: "https://www.linkedin.com/company/colorify-media-llp/", color: "#0077b5" },
                { icon: WhatsappIcon, url: "https://wa.me/919892282218", color: "#25d366" },
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
              to="/legal-privacy"
              style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal-terms"
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
