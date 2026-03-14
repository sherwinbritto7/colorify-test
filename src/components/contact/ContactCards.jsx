import { motion } from "framer-motion";
import Magnetic from "../Magnetic";
import { Send, Instagram, Linkedin } from "lucide-react";

const ContactCard = ({ label, value, icon: Icon, color }) => (
  <Magnetic>
    <motion.a
      href="#"
      className="contact-card"
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
      <style>{`
        @media (max-width: 768px) {
          .contact-card {
            padding: 1.5rem !important;
            border-radius: 20px !important;
            gap: 0.5rem !important;
          }
          .contact-card-icon {
            width: 44px !important;
            height: 44px !important;
          }
          .contact-card-icon svg {
            width: 20px !important;
          }
          .contact-card-label {
            font-size: 0.7rem !important;
          }
          .contact-card-value {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
      <div
        className="contact-card-icon"
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
          className="contact-card-label"
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
          className="contact-card-value"
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

const ContactCards = () => {
  return (
    <div
      className="contact-info-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        marginBottom: "8rem",
      }}
    >
      <ContactCard
        label="Direct Mail"
        value="hello@colorify.agency"
        icon={Send}
        color="#29abe2"
      />
      <ContactCard
        label="Instagram"
        value="@colorify.global"
        icon={Instagram}
        color="#7b3f9e"
      />
      <ContactCard
        label="LinkedIn"
        value="Colorify Agency"
        icon={Linkedin}
        color="#00a99d"
      />
    </div>
  );
};

export default ContactCards;
