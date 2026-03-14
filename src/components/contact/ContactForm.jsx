import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Magnetic from "../Magnetic";

const ContactForm = () => {
  return (
    <div style={{ marginBottom: "8rem" }}>
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-form-card"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "rgba(10, 10, 10, 0.4)",
          backdropFilter: "blur(30px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "48px",
          padding: "5rem 4rem",
          boxShadow: "0 50px 120px rgba(0, 0, 0, 0.6)",
        }}
      >
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
            
            @media (max-width: 768px) {
              .contact-form-card {
                padding: 2rem 1.25rem !important;
                border-radius: 24px !important;
              }
              .form-grid-2col {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
              form {
                gap: 1.5rem !important;
              }
              label {
                font-size: 0.65rem !important;
                letter-spacing: 1px !important;
              }
              .contact-input {
                padding: 1rem !important;
                font-size: 0.95rem !important;
                border-radius: 12px !important;
              }
              .submit-btn {
                width: 100% !important;
                padding: 1.2rem 2rem !important;
                font-size: 1rem !important;
                justify-content: center !important;
              }
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
    </div>
  );
};

export default ContactForm;
