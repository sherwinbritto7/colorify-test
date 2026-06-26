import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import showreel from "../../assets/videos/work1.webm";
import v2 from "../../assets/videos/work2.webm";
import v3 from "../../assets/videos/work3.webm";
import { Sparkles, Cpu, Image, CheckCircle } from "lucide-react";

const HybridAIFilmmaking = () => {
  const features = [
    { title: "AI-Enhanced Pre-Viz", desc: "Using advanced generative design for fast prototyping of storyboards, characters, and set concepts." },
    { title: "Smart CGI Integration", desc: "Seamless blending of physically captured live action with real-time rendered virtual backdrops." },
    { title: "Neural Post Production", desc: "Automating complex VFX rotoscoping, upscaling, and restoration tasks with machine learning." }
  ];

  const videos = [
    { src: v3, title: "Virtual Production Reel", desc: "Showcasing live-tracked camera interaction with digital assets." },
    { src: showreel, title: "AI Concept Art Showcase", desc: "Dynamic animation of conceptual set models." },
    { src: v2, title: "CGI Blend Reel", desc: "Visual breakdown of layers combining physical sets and neural art." }
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
            <a href="/services" style={{ color: "#29abe2", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase" }}>
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
            HYBRID <span className="gradient-text">AI</span> FILMMAKING
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
            Pushing the boundaries of classical cinema by infusing it with generative AI systems. 
            We integrate neural art workflows, smart virtual setups, and automated CGI pipelines 
            to accelerate workflow and create hyper-realistic, imaginative visual realities.
          </motion.p>

          {/* Features */}
          <section style={{ minHeight: "auto", padding: "2rem 0", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", textTransform: "uppercase" }}>Core Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ padding: "2.5rem", borderRadius: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <CheckCircle size={28} color="#29abe2" style={{ marginBottom: "1.5rem" }} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.8rem", color: "#fff" }}>{feat.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 10rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Works</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "1000px", margin: "0 auto" }}>
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

export default HybridAIFilmmaking;
