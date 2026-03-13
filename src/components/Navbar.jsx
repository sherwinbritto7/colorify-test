import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact Now", path: "/contactnow" },
  ];

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-effect"
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "50%",
          zIndex: 1000,
          padding: "0.6rem 1.5rem",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          width: "max-content",
          maxWidth: "95vw",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo.jpg"
            alt="Colorify"
            style={{
              height: "24px",
              filter: "brightness(1.1)",
              borderRadius: "4px",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="nav-links-desktop"
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {links.map((link) => (
            <Magnetic key={link.path}>
              <Link
                to={link.path}
                style={{
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  color:
                    location.pathname === link.path
                      ? "#fff"
                      : "rgba(255,255,255,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--brand-teal)",
                      position: "absolute",
                      bottom: "-8px",
                    }}
                  />
                )}
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "none",
            padding: "5px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Menu size={24} />
        </button>

        <style>{`
          @media (max-width: 768px) {
            .nav-links-desktop {
              display: none !important;
            }
            .menu-toggle {
              display: flex !important;
            }
          }
        `}</style>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(10px)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "80%",
                maxWidth: "400px",
                background: "rgba(10, 10, 10, 0.95)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "3rem"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <img
                  src="/logo.jpg"
                  alt="Colorify"
                  style={{ height: "30px", borderRadius: "6px" }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
                >
                  <X size={32} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--brand-teal)", letterSpacing: "3px", textTransform: "uppercase" }}>
                  Navigation
                </p>
                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: location.pathname === link.path ? "white" : "rgba(255,255,255,0.3)",
                        textDecoration: "none",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        display: "block",
                        transition: "color 0.3s ease"
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  Architecting atmosphere through digital and physical experiences.
                </p>
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <div style={{ width: "30px", height: "1px", background: "rgba(255,255,255,0.1)", marginTop: "10px" }} />
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                    Colorify Agency
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
