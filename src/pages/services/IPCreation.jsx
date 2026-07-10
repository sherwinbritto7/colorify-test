import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

import { Users, Shield, Layers, Award, CheckCircle } from "lucide-react";
import CTA from "../../components/CTA";

const IPCreation = () => {
  const features = [
    { title: "Original IP Incubation", desc: "Developing unique story concepts, characters, and show formats from initial drafts to pitch-ready pilots." },
    { title: "Strategic Co-Production", desc: "Collaborating with leading studios and distributors to maximize content reach and production scale." },
    { title: "Asset Ownership & Licensing", desc: "Securing intellectual property rights, trademarks, and syndication deals to create long-term brand equity." }
  ];

  const videos = [
    { embedId: "JwbK6MR9lhE", title: "Who Is The Boss", desc: "Original IP production showcasing bold storytelling and cinematic world-building." },
    { embedId: "f077hcY-lK0", title: "BRETT LEE TV", desc: "Original digital show concept featuring cricket legend Brett Lee." },
    { embedId: "l8I7B139P48", title: "Classic Men", desc: "A proprietary branded series blending style, culture, and high-production value." },
    { embedId: "DJt0G0_AVMk", title: "BRETT LEE TV", desc: "Original digital show concept featuring cricket legend Brett Lee." }
  ];

  return (
    <PageTransition>
      <div style={{ position: "relative", minHeight: "100vh", paddingTop: "14rem" }}>
        <div className="container">


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
            IP <span className="gradient-text">CREATION</span> & PROPRIETARY MEDIA
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
            Ownership is the future of media. We conceptualize, build, and produce proprietary entertainment properties and web franchises, transforming standard media content into high-value intellectual assets.
          </motion.p>

          {/* Features */}
          <section style={{ minHeight: "auto", padding: "2rem 0", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", textTransform: "uppercase" }}>Core Focus Areas</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ padding: "2.5rem", borderRadius: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <CheckCircle size={28} color="#f26522" style={{ marginBottom: "1.5rem" }} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.8rem", color: "#fff" }}>{feat.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 10rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Properties</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              {videos.map((vid, idx) => (
                <div key={idx} style={{ width: "100%", borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.embedId}?autoplay=1&mute=1&loop=1&playlist=${vid.embedId}&controls=1&rel=0`}
                      title={vid.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
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
          <CTA />
        </div>
      </div>
    </PageTransition>
  );
};

export default IPCreation;
