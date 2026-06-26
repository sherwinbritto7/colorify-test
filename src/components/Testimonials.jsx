import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Piyush Puranik",
    time: "12 months ago",
    stars: 5,
    text: "Thank you for your clear guidance and support throughout our corporate gala. The audio-visual integration was flawless and our stakeholders were completely blown away.",
  },
  {
    name: "Pranav Borkar",
    time: "10 months ago",
    stars: 5,
    text: "Working with Colorify feels like having a production partner that actually understands creativity. They are responsive, highly skilled, and executed our music festival design perfectly.",
  },
  {
    name: "Mayuri Ghatule",
    time: "6 months ago",
    stars: 5,
    text: "Had an amazing experience for our product launch event. The custom stage design and laser show was phenomenal. Special thanks to the team for managing everything so smoothly!",
  },
  {
    name: "Love Kulshrestha",
    time: "8 months ago",
    stars: 5,
    text: "A highly professional agency that delivers on its promises. Creative design, high-end equipment, and committed to visual perfection. Will definitely partner with them again.",
  },
  {
    name: "Rohan Sharma",
    time: "3 months ago",
    stars: 5,
    text: "The mapping projection work they did for our building anniversary was state of the art. Truly world-class cinematography and lighting.",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ flexShrink: 0 }}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="#29abe2" style={{ marginLeft: "5px", flexShrink: 0 }}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one card width (approx 340px)
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section
      className="testimonials-section"
      style={{
        padding: "8rem 0",
        background: "rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "var(--brand-yellow)",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
            }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginTop: "1rem",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 900,
            }}
          >
            WHAT CLIENTS SAY <span className="gradient-text">ABOUT</span> OUR WORK
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{
              position: "absolute",
              left: "-1.5rem",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "var(--brand-teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrolling Track */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "2rem",
              overflowX: "auto",
              padding: "2rem 0",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
              width: "100%",
            }}
            className="testimonials-track"
          >
            <style>{`
              .testimonials-track::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 768px) {
                .testimonials-track {
                  padding: 1rem 0;
                }
              }
            `}</style>

            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  minWidth: "320px",
                  maxWidth: "320px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "24px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  position: "relative",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
                whileHover={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255, 255, 255, 0.04)",
                }}
              >
                <div>
                  {/* Top Header Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "white",
                          margin: 0,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {t.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          display: "block",
                          marginTop: "0.2rem",
                        }}
                      >
                        {t.time}
                      </span>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Rating Stars & Verified badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: "2px" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < t.stars ? "#FBBC05" : "rgba(255,255,255,0.15)"}
                          color={i < t.stars ? "#FBBC05" : "transparent"}
                        />
                      ))}
                    </div>
                    <VerifiedIcon />
                  </div>

                  {/* Body Text */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{
              position: "absolute",
              right: "-1.5rem",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "var(--brand-teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
