import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { Send, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactInfo = ({ label, value, icon: Icon, color }) => (
  <Magnetic>
    <motion.a
      href="#"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "32px",
        textDecoration: "none",
        gap: "1rem",
        transition: "border-color 0.3s ease",
      }}
      whileHover={{
        borderColor: color + "50",
        backgroundColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: color + "15",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
        }}
      >
        <Icon size={28} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "1.1rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {value}
        </p>
      </div>
    </motion.a>
  </Magnetic>
);

const Contact = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: "10rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .contact-section {
            padding: 6rem 0 2rem !important;
          }
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .contact-form-card {
            padding: 3rem 1.5rem !important;
            border-radius: 32px !important;
          }
          .form-grid-2col {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .contact-map-container {
            height: 350px !important;
            border-radius: 32px !important;
          }
          .submit-btn {
            width: 100% !important;
            padding: 1.2rem 2rem !important;
            font-size: 1rem !important;
            justify-content: center !important;
          }
        }
      `}</style>
      {/* Mega Background Orb */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, #29abe215 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
              fontWeight: 900,
            }}
          >
            LET'S <span className="gradient-text">COLORIFY</span> <br />
            YOUR NEXT VISION
          </motion.h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-secondary)",
              marginTop: "2rem",
              maxWidth: "600px",
              margin: "2rem auto 0",
            }}
          >
            The world's most innovative brands choose us to architect their
            atmosphere. Ready to be the next highlight?
          </p>
        </div>

        <div
          className="contact-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "8rem",
          }}
        >
          <ContactInfo
            label="Direct Mail"
            value="hello@colorify.agency"
            icon={Send}
            color="#29abe2"
          />
          <ContactInfo
            label="Instagram"
            value="@colorify.global"
            icon={Instagram}
            color="#7b3f9e"
          />
          <ContactInfo
            label="LinkedIn"
            value="Colorify Agency"
            icon={Linkedin}
            color="#00a99d"
          />
        </div>

        {/* Form Identification Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              fontSize: "0.9rem",
              color: "var(--brand-teal)",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Project Inquiry
          </motion.h3>
        </div>

        {/* Premium Contact Form with High Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-form-card"
          style={{
            maxWidth: "800px",
            margin: "0 auto 8rem",
            backgroundColor: "rgba(10, 10, 10, 0.4)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "48px",
            padding: "5rem 4rem",
            boxShadow: "0 50px 120px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Form Content ... */}
          <form style={{ display: "grid", gap: "2.5rem" }}>
            <div
              className="form-grid-2col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <div style={{ display: "grid", gap: "0.8rem" }}>
                <label
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--brand-teal)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    padding: "1.4rem",
                    color: "#fff",
                    fontSize: "1.1rem",
                    outline: "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: "0.8rem" }}>
                <label
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--brand-purple)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="contact-input"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    padding: "1.4rem",
                    color: "#fff",
                    fontSize: "1.1rem",
                    outline: "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gap: "0.8rem" }}>
              <label
                style={{
                  fontSize: "0.75rem",
                  color: "var(--brand-yellow)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Industry / Event Type
              </label>
              <input
                type="text"
                placeholder="What are we creating?"
                className="contact-input"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "20px",
                  padding: "1.4rem",
                  color: "#fff",
                  fontSize: "1.1rem",
                  outline: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "0.8rem" }}>
              <label
                style={{
                  fontSize: "0.75rem",
                  color: "var(--brand-teal)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                The Vision
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you colorify your next big moment?"
                className="contact-input"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "24px",
                  padding: "1.4rem",
                  color: "#fff",
                  fontSize: "1.1rem",
                  outline: "none",
                  resize: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>

            <style>{`
              .contact-input:focus {
                border-color: var(--brand-yellow) !important;
                background: rgba(255, 255, 255, 0.08) !important;
                box-shadow: 0 0 35px rgba(197, 212, 41, 0.2);
                transform: translateY(-2px);
              }
              .contact-input::placeholder {
                color: rgba(255,255,255,0.3);
              }
              .contact-input:hover {
                border-color: rgba(255,255,255,0.4);
                background: rgba(255,255,255,0.07);
              }
            `}</style>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Magnetic>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="submit-btn"
                  style={{
                    padding: "1.6rem 6rem",
                    background: "var(--brand-teal)",
                    color: "#000",
                    border: "none",
                    borderRadius: "100px",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    boxShadow: "0 25px 50px rgba(0, 169, 157, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  SEND INQUIRY <Send size={24} />
                </motion.button>
              </Magnetic>
            </div>
          </form>
        </motion.div>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              fontSize: "0.9rem",
              color: "var(--brand-purple)",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Google Map
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-cursor-hide={mapActive ? "true" : undefined}
          className="contact-map-container"
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "48px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            position: "relative",
          }}
        >
          {/* Google Maps Embed with pointer-events protection */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4102.061097420713!2d72.83506969999999!3d19.177696499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b754757e28ff%3A0xf9243a9fd55e5e89!2sColorify%20Media%20LLP!5e1!3m2!1sen!2sin!4v1773321451616!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              pointerEvents: mapActive ? "auto" : "none", // Critical: Blocks interaction until active
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Interactive Overlay to prevent cursor sticking */}
          {!mapActive && (
            <div
              onClick={() => setMapActive(true)}
              style={{
                position: "absolute",
                inset: 0,
                cursor: "pointer",
                background: "rgba(0,0,0,0)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              title="Click to interact with map"
            >
              <div
                style={{
                  padding: "1rem 2rem",
                  background: "rgba(10, 10, 10, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "100px",
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  pointerEvents: "none",
                  opacity: 0.8,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Click to Interact
              </div>
            </div>
          )}

          {/* Close interaction button */}
          {mapActive && (
            <button
              onClick={() => setMapActive(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 20,
                padding: "0.5rem 1rem",
                background: "var(--brand-teal)",
                color: "black",
                border: "none",
                borderRadius: "10px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            >
              EXIT MAP
            </button>
          )}

          {/* Overlay Glow to blend the map edges into the theme */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(10, 10, 10, 0.6) 100%)",
              zIndex: 5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
