import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import PageTransition from "../components/PageTransition";

// ─── Data ────────────────────────────────────────────────────────────────────

const founders = [
  {
    name: "ADITYA JOSHI",
    // role: "Co-Founder & Creative Director",
    bio1: "We built Colorify with the aspiration to implement newer perspectives in filmmaking, which could be achieved by encouraging young and fresh talent. Our formal education gives us an edge, but our diverse experience in the field is what helps us make a mark.",
    bio2: "As we learned more about the industry, we’ve refined our offerings and strive to perform to the best of our abilities. In the future, we at Colorify hope to expand creatively and cater to a versatile range of brands.",
    color: "#7b3f9e",
    accentColor: "#29abe2",
    initials: "AJ",
    photo: "/src/assets/photos/Aditya-Joshi.jpg",
    tag: "The Creative Force",
  },
  {
    name: "AKSHAY THAKER",
    // role: "Co-Founder & Executive Producer",
    bio1: "Colorify has helped me grow in more ways than I have helped it grow. It has helped me explore within and beyond my own creative abilities and capitalise on my strengthsr; but more importantly, it has helped me create a business out of my greatest passion. We carry our core values with us, but we don’t shy away from change.",
    bio2: "We learn, we evolve, and we curate stimulating content that keeps with the times. For me, Colorify is a rewarding journey towards achieving my filmmaking dream. ",
    color: "#00a99d",
    accentColor: "#c5d429",

    initials: "AT",
    photo: "/src/assets/photos/akshay.jpg",
    tag: "The Execution Engine",
  },
];

const team = [
  {
    name: "Rahul Verma",
    role: "Head of AV Technology",
    color: "#c5d429",
    initials: "RV",
  },
  {
    name: "Ananya Iyer",
    role: "Lead Stage Designer",
    color: "#29abe2",
    initials: "AI",
  },
  {
    name: "Karan Malhotra",
    role: "Senior Lighting Engineer",
    color: "#39b54a",
    initials: "KM",
  },
  {
    name: "Sneha Joshi",
    role: "Brand Strategy Lead",
    color: "#3b6bb5",
    initials: "SJ",
  },
  {
    name: "Vikram Nair",
    role: "Live Streaming Director",
    color: "#00a99d",
    initials: "VN",
  },
  {
    name: "Divya Reddy",
    role: "Event Coordinator",
    color: "#7b3f9e",
    initials: "DR",
  },
];

// Mosaic gallery items — mix of real photos and decorative graphic tiles
const mosaicItems = [
  { type: "photo", src: "/src/assets/photos/about/about-01.webp", label: "Behind the Lens",  offsetY: "0px",    width: "220px", height: "300px" },
  { type: "graphic", variant: "stripes", color: "#c5d429",  offsetY: "60px",   width: "160px", height: "160px" },
  { type: "photo", src: "/src/assets/photos/about/about-02.webp",       label: "On Set",           offsetY: "20px",   width: "260px", height: "200px" },
  { type: "graphic", variant: "arc",     color: "#c5d429",  offsetY: "140px",  width: "160px", height: "160px" },
  { type: "photo", src: "/src/assets/photos/about/about-03.webp", label: "The Vision",       offsetY: "0px",    width: "230px", height: "270px" },
  { type: "photo", src: "/src/assets/photos/about/about-04.webp",       label: "Creative",         offsetY: "110px",  width: "200px", height: "180px" },
];

const mosaicRow2 = [
  { type: "photo", src: "/src/assets/photos/about/about-05.webp",       label: "Storytelling",     offsetY: "40px",   width: "220px", height: "280px" },
  { type: "photo", src: "/src/assets/photos/about/about-06.webp", label: "Candid",           offsetY: "0px",    width: "250px", height: "200px" },
  { type: "graphic", variant: "arc",     color: "#00a99d",  offsetY: "120px",  width: "150px", height: "150px" },
  { type: "photo", src: "/src/assets/photos/about/about-07.webp",       label: "Direction",        offsetY: "60px",   width: "240px", height: "260px" },
  { type: "graphic", variant: "stripes", color: "#7b3f9e",  offsetY: "20px",   width: "130px", height: "130px" },
  { type: "photo", src: "/src/assets/photos/about/about-08.webp", label: "Focus",            offsetY: "10px",   width: "210px", height: "290px" },
];

// ─── Mosaic Gallery ───────────────────────────────────────────────────────────

// Decorative SVG tile: horizontal stripe circle
const StripesGraphic = ({ color }) => (
  <svg viewBox="0 0 160 160" width="100%" height="100%">
    <defs>
      <clipPath id="circle-clip-s">
        <circle cx="80" cy="80" r="72" />
      </clipPath>
    </defs>
    {Array.from({ length: 18 }, (_, i) => (
      <line
        key={i}
        x1="4" y1={8 + i * 8.8}
        x2="156" y2={8 + i * 8.8}
        stroke={color}
        strokeWidth="4.5"
        clipPath="url(#circle-clip-s)"
      />
    ))}
  </svg>
);

// Decorative SVG tile: open arc / C-shape
const ArcGraphic = ({ color }) => (
  <svg viewBox="0 0 160 160" width="100%" height="100%">
    <circle
      cx="80" cy="80" r="58"
      fill="none"
      stroke={color}
      strokeWidth="28"
      strokeDasharray="245 130"
      strokeDashoffset="-30"
      strokeLinecap="round"
    />
  </svg>
);

const MosaicTile = ({ item }) => {
  return (
    <div
      style={{
        position: "relative",
        marginTop: item.offsetY,
        width: item.width,
        height: item.height,
        flexShrink: 0,
      }}
    >
      {item.type === "photo" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={item.src}
            alt={item.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              transition: "transform 0.6s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      ) : item.variant === "stripes" ? (
        <div style={{ width: "100%", height: "100%", opacity: 0.6 }}>
          <StripesGraphic color={item.color} />
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%", opacity: 0.6 }}>
          <ArcGraphic color={item.color} />
        </div>
      )}
    </div>
  );
};

const InfiniteMosaicRow = ({ items, speed = 40, rowIndex }) => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const gap = 32;
  
  const singleSetWidth = items.reduce(
    (acc, item) => acc + parseInt(item.width) + gap,
    0
  );

  // Initialize offset to start in the middle of the triple-cloned track
  if (xRef.current === 0) xRef.current = -singleSetWidth;

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return;
    
    // Smooth right-scrolling
    xRef.current += (delta / 1000) * speed;
    
    // Seamless reset logic
    if (xRef.current >= 0) {
      xRef.current -= singleSetWidth;
    }
    
    trackRef.current.style.transform = `translateX(${xRef.current}px) translateZ(0)`;
  });

  // Triple clones for a safe infinite loop on all screen sizes
  const displayItems = [...items, ...items, ...items];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: rowIndex * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: `${gap}px`,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {displayItems.map((item, i) => (
          <MosaicTile key={i} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

const MosaicGallery = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      padding: "2rem 0",
      position: "relative",
      maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    }}
  >
    <InfiniteMosaicRow items={mosaicItems} speed={44} rowIndex={0} />
    <InfiniteMosaicRow items={mosaicRow2} speed={32} rowIndex={1} />
  </div>
);

// ─── Founder Row (split layout) ───────────────────────────────────────────────

const FounderRow = ({ founder, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="founder-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        paddingBottom: "8rem",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        marginBottom: "8rem",
        direction: isEven ? "ltr" : "rtl",
      }}
    >
      {/* ── Text Side ── */}
      <div className="founder-text" style={{ direction: "ltr" }}>
        {/* Ghost heading */}
        <div
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
            fontWeight: 700,
            color: "rgba(255,255,255,0.18)",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "0.5rem",
          }}
        >
          who
        </div>
        <div
          style={{
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.06)",
            marginBottom: "2rem",
            userSelect: "none",
          }}
        >
          WE ARE
        </div>

        {/* Name */}
        <h3
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
            textTransform: "uppercase",
          }}
        >
          {founder.name}
        </h3>

        {/* Role */}
        <p
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: founder.color,
            marginBottom: "1.5rem",
          }}
        >
          {founder.role}
        </p>

        {/* Left accent bar */}
        <div
          style={{
            width: "40px",
            height: "3px",
            background: `linear-gradient(90deg, ${founder.color}, ${founder.accentColor})`,
            borderRadius: "2px",
            marginBottom: "2rem",
          }}
        />

        {/* Bios */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            fontSize: "0.95rem",
            marginBottom: "1.5rem",
          }}
        >
          {founder.bio1}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            fontSize: "0.9rem",
          }}
        >
          {founder.bio2}
        </p>

        {/* Tag pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            marginTop: "2.5rem",
            padding: "0.5rem 1.2rem",
            borderRadius: "100px",
            border: `1px solid ${founder.color}40`,
            background: `${founder.color}10`,
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: founder.color,
              boxShadow: `0 0 8px ${founder.color}`,
            }}
          />
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: founder.color,
            }}
          >
            {founder.tag}
          </span>
        </div>
      </div>

      {/* ── Photo / Visual Side ── */}
      <div className="founder-photo-container" style={{ direction: "ltr", position: "relative" }}>
        {/* Decorative colour block */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-24px",
            [isEven ? "right" : "left"]: "-24px",
            width: "80px",
            height: "80px",
            background: `linear-gradient(135deg, ${founder.accentColor}, ${founder.color})`,
            borderRadius: "16px",
            zIndex: 0,
            opacity: 0.85,
          }}
        />

        {/* Main photo card */}
        <div
          className="founder-photo-card"
          style={{
            position: "relative",
            zIndex: 1,
            borderRadius: "28px",
            overflow: "hidden",
            aspectRatio: "4/5",
            border: `1px solid ${founder.color}30`,
          }}
        >
          <img
            src={founder.photo}
            alt={founder.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${founder.color}60 0%, transparent 50%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: founder.accentColor,
                boxShadow: `0 0 10px ${founder.accentColor}`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {founder.tag}
            </span>
          </div>
        </div>

        {/* Dot-grid decoration */}
        <div
          className="founder-dot-grid"
          style={{
            position: "absolute",
            bottom: "-20px",
            [isEven ? "left" : "right"]: "-20px",
            width: "80px",
            height: "80px",
            backgroundImage: `radial-gradient(circle, ${founder.color}50 1px, transparent 1px)`,
            backgroundSize: "12px 12px",
            zIndex: 0,
          }}
        />
      </div>
      <style>{`
        @media (max-width: 991px) {
          .founder-row {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            padding-bottom: 6rem !important;
            margin-bottom: 6rem !important;
          }
          .founder-text {
            order: 2;
          }
          .founder-photo-container {
            order: 1;
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <PageTransition>
      <div style={{ position: "relative" }}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section style={{ paddingTop: "14rem", paddingBottom: "8rem" }}>
          <div className="container">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                color: "var(--brand-teal)",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Who We Are
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                fontWeight: 900,
              }}
            >
              THE PEOPLE
              <br />
              <span className="gradient-text">BEHIND THE</span>
              <br />
              MAGIC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                marginTop: "3rem",
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Colorify is a collective of obsessive creatives, precision
              engineers, and storytelling strategists united by one goal —
              turning ordinary moments into extraordinary memories.
            </motion.p>
          </div>
        </section>

        {/* ── Founders (split layout) ───────────────────────── */}
        <section style={{ padding: "8rem 0 0" }}>
          <div className="container">
            {/* Section label */}
            <div style={{ marginBottom: "8rem" }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  color: "var(--brand-purple)",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  display: "block",
                  marginBottom: "1.5rem",
                }}
              >
                The Visionaries
              </motion.span>
              <h2
                style={{
                  fontSize: "clamp(3rem, 7vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                OUR <span className="gradient-text">FOUNDERS</span>
              </h2>
            </div>

            {founders.map((f, i) => (
              <FounderRow key={f.name} founder={f} index={i} />
            ))}
          </div>
        </section>

        {/* ── Team ──────────────────────────────────────────── */}
        <section style={{ padding: "8rem 0" }}>
          <div className="container">
            <div style={{ marginBottom: "6rem" }}>
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
                }}
              >
                The Crew
              </motion.span>
              <h2
                style={{
                  fontSize: "clamp(3rem, 7vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                MEET THE <span className="gradient-text">TEAM</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2rem",
              }}
            >
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    padding: "2.5rem",
                    borderRadius: "32px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.4s ease, background 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = member.color + "60";
                    e.currentTarget.style.background = member.color + "08";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: `${member.color}20`,
                      border: `1px solid ${member.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      fontWeight: 900,
                      color: member.color,
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "0.3rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        color: member.color,
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mosaic Photo Gallery ──────────────────────────── */}
        <section style={{ padding: "8rem 0 12rem" }}>
          <div className="container" style={{ marginBottom: "5rem" }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                color: "var(--brand-purple)",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Our Work
            </motion.span>
            <h2
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              MOMENTS WE'VE <span className="gradient-text">CREATED</span>
            </h2>
          </div>

          <MosaicGallery />
        </section>

        <div style={{ height: "5vh" }} />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
