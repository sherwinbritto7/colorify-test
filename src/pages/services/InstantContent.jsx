import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import showreel from "../../assets/videos/showreel.mp4";
import v2 from "../../assets/videos/v2.mp4";
import v3 from "../../assets/videos/v3.mp4";
import { Zap, Clock, Send, CheckCircle } from "lucide-react";

const InstantContent = () => {
  const features = [
    { title: "Real-Time Event Delivery", desc: "Capturing, editing, and delivering highly engaging content live during events for immediate audience distribution." },
    { title: "Optimized Social Shorts", desc: "Creating high-impact short-form videos tailored perfectly to current viral formats and platform algorithms." },
    { title: "Rapid Turnaround Pipeline", desc: "Proprietary agile assembly pipeline enabling fast deliverables without losing color quality or storytelling integrity." }
  ];

  const videos = [
    { src: showreel, title: "Social Campaign Showcase", desc: "Shorts and reels designed for immediate viral impact." },
    { src: v3, title: "Live Event Recap", desc: "Recap video rendered and posted within hours of event kick-off." },
    { src: v2, title: "Micro-Narratives", desc: "Engaging 15-second narratives capturing brand essence." }
  ];

  return (
    <PageTransition>
      <div style={{ position: "relative", minHeight: "100vh", paddingTop: "14rem" }}>
        <div className="container">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginBottom: "2rem" }}
          >
            <a href="/services" style={{ color: "#39b54a", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase" }}>
              ← Back to Services
            </a>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              marginBottom: "3rem",
              textTransform: "uppercase"
            }}
          >
            INSTANT <span className="gradient-text">CONTENT</span> DELIVERY
          </motion.h1>

          {/* Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.8,
              marginBottom: "5rem"
            }}
          >
            Speed is the key to modern audience engagement. 
            We specialize in real-time, rapid content creation, capturing the essence of live moments 
            and delivering high-quality, platform-optimized videos within hours.
          </motion.p>

          {/* Features */}
          <section style={{ marginBottom: "8rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "3rem", textTransform: "uppercase" }}>Core Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ padding: "2.5rem", borderRadius: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <CheckCircle size={28} color="#39b54a" style={{ marginBottom: "1.5rem" }} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.8rem", color: "#fff" }}>{feat.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Videos */}
          <section style={{ paddingBottom: "10rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "3rem", textTransform: "uppercase" }}>Featured Works</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "800px", margin: "0 auto" }}>
              {videos.map((vid, idx) => (
                <div key={idx} style={{ borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                    <video
                      src={vid.src}
                      controls
                      muted
                      loop
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "1.8rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{vid.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>{vid.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default InstantContent;
