import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { Zap, Clock, Send, CheckCircle } from "lucide-react";

const InstantContent = () => {
  const features = [
    { title: "Real-Time Event Delivery", desc: "Capturing, editing, and delivering highly engaging content live during events for immediate audience distribution." },
    { title: "Optimized Social Shorts", desc: "Creating high-impact short-form videos tailored perfectly to current viral formats and platform algorithms." },
    { title: "Rapid Turnaround Pipeline", desc: "Proprietary agile assembly pipeline enabling fast deliverables without losing color quality or storytelling integrity." }
  ];

  const videos = [
    { embedUrl: "https://www.youtube.com/embed/2Kvos0uqSWQ?autoplay=1&mute=1&controls=1&loop=1&playlist=2Kvos0uqSWQ", title: "HSBC Sitar for Mental Health", desc: "Immersive musical moments optimized for vertical screens." },
    { embedUrl: "https://www.youtube.com/embed/-ggFSzR6r98?autoplay=1&mute=1&controls=1&loop=1&playlist=-ggFSzR6r98", title: "Food Stories", desc: "Capturing culinary art with rapid turnaround and rich colors." },
    { embedUrl: "https://www.youtube.com/embed/foNTzAfpSs4?autoplay=1&mute=1&controls=1&loop=1&playlist=foNTzAfpSs4", title: "HSBC", desc: "Dynamic commercial campaign content delivered instantly." }
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
            <Link to="/services" style={{ color: "#39b54a", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase" }}>
              ← Back to Services
            </Link>
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
              marginBottom: "3rem"
            }}
          >
            Speed is the key to modern audience engagement. 
            We specialize in real-time, rapid content creation, capturing the essence of live moments 
            and delivering high-quality, platform-optimized videos within hours.
          </motion.p>

          {/* Features */}
          <section style={{ minHeight: "auto", padding: "2rem 0", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", textTransform: "uppercase" }}>Core Features</h2>
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
          <section style={{ minHeight: "auto", padding: "0 0 10rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Works</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem", width: "100%", alignItems: "flex-start" }}>
              {videos.map((vid, idx) => (
                <div key={idx} style={{ flex: 1, minWidth: 0, borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <iframe
                    src={vid.embedUrl}
                    title={vid.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", aspectRatio: "9/16", display: "block", border: "none" }}
                  />
                  <div style={{ padding: "1.2rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem", color: "#fff" }}>{vid.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.5 }}>{vid.desc}</p>
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
