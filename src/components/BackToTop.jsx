import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
            zIndex: 3000,
          }}
        >
          <Magnetic>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "var(--brand-teal)",
                color: "#000",
                boxShadow: "0 20px 40px rgba(0, 169, 157, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 15px 45px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
