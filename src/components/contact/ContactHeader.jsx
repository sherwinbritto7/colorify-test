import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;
