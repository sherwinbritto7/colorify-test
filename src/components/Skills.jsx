import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    icon: Users,
    number: "01",
    name: "IP Creation",
    desc: "Conceptualizing, developing, and producing proprietary media assets, original IPs, web series, and branded properties that stand the test of time.",
    color: "#f26522",
    tags: ["Originals", "Co-Prod", "Ownership"],
    path: "/services/ip-creation",
    spanTwo: true,
  },
  {
    icon: Camera,
    number: "02",
    name: "Pre to Post Production",
    desc: "From script writing and storyboarding to shooting and final delivery, we cover the entire filmmaking lifecycle.",
    color: "#c5d429",
    tags: ["Pre-Prod", "Shooting", "Post-Prod"],
    path: "/services/pre-post-production",
  },
  {
    icon: Wrench,
    number: "03",
    name: "Editing",
    desc: "Expert post-production editing, color grading, visual effects, sound design, and pacing that brings your narrative to life.",
    color: "#7b3f9e",
    tags: ["VFX", "Grading", "Sound"],
    path: "/services/editing",
  },
  {
    icon: Sparkles,
    number: "04",
    name: "Hybrid AI Filmmaking",
    desc: "Leveraging cutting-edge AI technologies blended with classical filmmaking to create hyper-realistic visuals and automate workflows.",
    color: "#29abe2",
    tags: ["AI Tech", "CGI", "Future"],
    path: "/services/hybrid-ai-filmmaking",
  },
  {
    icon: Lightbulb,
    number: "05",
    name: "Instant content",
    desc: "Rapid turnaround content generation optimized for social media, live events, and instant audience engagement.",
    color: "#39b54a",
    tags: ["Fast", "Socials", "Live"],
    path: "/services/instant-content",
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
        .service-card .arrow-icon {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover .arrow-icon {
          transform: translateX(6px);
        }
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
          .service-link-card {
            grid-column: span 1 !important;
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2.5rem",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                to={service.path}
                key={service.name}
                className="service-link-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  width: "100%",
                  gridColumn: service.spanTwo ? "span 2" : "auto"
                }}
              >
                <motion.div
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

                {/* Redirection Button */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    marginTop: "2rem",
                    padding: "0.8rem 1.6rem",
                    borderRadius: "100px",
                    border: `1px solid ${service.color}30`,
                    background: `${service.color}08`,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: service.color,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    alignSelf: "flex-start",
                    transition: "border-color 0.4s ease, background 0.4s ease",
                  }}
                >
                  Explore Service
                  <span className="arrow-icon">→</span>
                </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
