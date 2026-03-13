import { motion } from "framer-motion";
import {
  Sparkles,
  Music,
  Users,
  Camera,
  Lightbulb,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    number: "01",
    name: "Event Design",
    desc: "Creative conceptualization and full-scale thematic design that transforms any venue into an unforgettable world.",
    color: "#c5d429",
    tags: ["Concept", "Décor", "Theme"],
  },
  {
    icon: Music,
    number: "02",
    name: "Production",
    desc: "High-end AV, lighting, and stage management services powered by cutting-edge equipment and expert crews.",
    color: "#7b3f9e",
    tags: ["AV", "Lighting", "Stage"],
  },
  {
    icon: Users,
    number: "03",
    name: "Coordination",
    desc: "Seamless logistics and guest management for any scale — from intimate gatherings to 10,000+ attendees.",
    color: "#39b54a",
    tags: ["Logistics", "Guests", "Timeline"],
  },
  {
    icon: Camera,
    number: "04",
    name: "Promotion",
    desc: "Content creation and digital marketing strategies that capture the energy of your event and amplify your reach.",
    color: "#29abe2",
    tags: ["Social", "Content", "PR"],
  },
  {
    icon: Lightbulb,
    number: "05",
    name: "Brand Strategy",
    desc: "Aligning every touchpoint of your event with your core brand identity for maximum impact and recall.",
    color: "#00a99d",
    tags: ["Identity", "Positioning", "Impact"],
  },
  {
    icon: Wrench,
    number: "06",
    name: "Tech Support",
    desc: "On-site technical direction, live streaming solutions, and real-time troubleshooting for flawless execution.",
    color: "#3b6bb5",
    tags: ["Streaming", "On-site", "AV Tech"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{ padding: "12rem 0", position: "relative" }}
    >
      <style>{`
        @media (max-width: 768px) {
          .skills-section {
            padding: 6rem 0 !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .service-card {
            padding: 2rem !important;
          }
        }
      `}</style>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "8rem", position: "relative" }}>
          {/* Section Atmosphere Glow */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
            height: "40vw",
            background: "radial-gradient(circle, #39b54a08 0%, transparent 70%)",
            filter: "blur(100px)",
            pointerEvents: "none",
            zIndex: 0
          }} />

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              color: "var(--brand-teal)",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "1.5rem",
              position: "relative",
              zIndex: 1
            }}
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1
            }}
          >
            OUR <span className="gradient-text">SERVICES</span>
          </motion.h2>
        </div>

        {/* Service Cards Grid - Matching 'HOW WE DELIVER SUCCESS' layout */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="service-card"
                style={{
                  position: "relative",
                  padding: "3rem",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color + "60";
                  e.currentTarget.style.background = service.color + "08";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-2rem",
                    right: "2rem",
                    fontSize: "6rem",
                    fontWeight: 900,
                    color: service.color,
                    opacity: 0.1,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {service.number}
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "18px",
                    background: `${service.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.color,
                    marginBottom: "2rem",
                    boxShadow: `0 10px 30px ${service.color}20`
                  }}
                >
                  <Icon size={30} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                  {service.name}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, flexGrow: 1 }}>
                  {service.desc}
                </p>

                {/* Subtly animated corner glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    bottom: "-15%",
                    right: "-15%",
                    width: "150px",
                    height: "150px",
                    background: service.color,
                    filter: "blur(60px)",
                    pointerEvents: "none"
                  }}
                />

                {/* Tags */}
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2rem" }}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3rem 0.8rem",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: service.color,
                        background: service.color + "12",
                        border: `1px solid ${service.color}30`,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
