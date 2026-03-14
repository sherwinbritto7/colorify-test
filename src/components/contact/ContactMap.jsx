import { useState } from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <div style={{ marginBottom: "4rem" }}>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4102.061097420713!2d72.83506969999999!3d19.177696499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b754757e28ff%3A0xf9243a9fd55e5e89!2sColorify%20Media%20LLP!5e1!3m2!1sen!2sin!4v1773321451616!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            pointerEvents: mapActive ? "auto" : "none",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

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
      <style>{`
        @media (max-width: 768px) {
          .contact-map-container {
            height: 350px !important;
            border-radius: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMap;
