import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { Zap, Clock, Send, CheckCircle, Heart, Eye } from "lucide-react";
import CTA from "../../components/CTA";
import CaseStudy from "../../components/CaseStudy";

const InstantContent = () => {
  const videos = [
    { embedUrl: "https://www.youtube.com/embed/2Kvos0uqSWQ?autoplay=1&mute=1&controls=1&loop=1&playlist=2Kvos0uqSWQ", title: "HSBC Sitar for Mental Health", desc: "Immersive musical moments optimized for vertical screens." },
    { embedUrl: "https://www.youtube.com/embed/-ggFSzR6r98?autoplay=1&mute=1&controls=1&loop=1&playlist=-ggFSzR6r98", title: "Food Stories", desc: "Capturing culinary art with rapid turnaround and rich colors." },
    { embedUrl: "https://www.youtube.com/embed/foNTzAfpSs4?autoplay=1&mute=1&controls=1&loop=1&playlist=foNTzAfpSs4", title: "HSBC", desc: "Dynamic commercial campaign content delivered instantly." }
  ];

  const processSteps = [
    { title: "Empathize", subtitle: "Spot Opportunities", desc: "Identifying key brand moments and real-time viral trends.", icon: Heart },
    { title: "Define", subtitle: "Set Up Templates", desc: "Preparing instant LUTs, aspect ratios, and export presets before the event.", icon: Clock },
    { title: "Ideate", subtitle: "Live Capture", desc: "Ingesting live footage directly from the camera operators to mobile workstations.", icon: Zap },
    { title: "Design", subtitle: "Agile Assembly", desc: "Rapid editing, trend sound syncing, and immediate color grading.", icon: Send },
    { title: "Test", subtitle: "Instant Publish", desc: "Fast-rendering validation, client approval, and real-time upload.", icon: Eye }
  ];

  const solutionFeatures = [
    {
      title: "Real-Time Event Delivery",
      points: [
        "Capturing, editing, and delivering highly engaging content live during events.",
        "On-site ingestion and instant timeline compilation.",
        "Rapid event delivery to capture active viewer attention windows."
      ]
    },
    {
      title: "Optimized Social Shorts",
      points: [
        "Creating high-impact short-form videos tailored perfectly to current viral formats.",
        "TikTok and Reels audio synchronization.",
        "Visual style hook structures designed for loops."
      ]
    }
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

          {/* Case Study Section */}
          <CaseStudy
            accentColor="#39b54a"
            problemTitle="Missed Viral Windows & Slow Event Output"
            problemDesc="In social marketing, trend windows last less than 24 hours. Standard post-production pipelines take days, resulting in:"
            problemPoints={[
              "Missed opportunities for brands to capitalize on live events.",
              "High production latency for short-form social content.",
              "Loss of viewer engagement and platform algorithm penalties."
            ]}
            problemConclusion="Relevance drops by 80% every day a trending moment or live event output is delayed."
            solutionTitle="On-Site Real-Time Agile Assembly"
            solutionDesc="We deploy on-site editing bays and direct-to-cloud workflows to deliver fully polished short-form content in under 4 hours:"
            solutionFeatures={solutionFeatures}
            processTitle="REAL-TIME DELIVERY PROCESS"
            processSteps={processSteps}
          />

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 4rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Works</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem", width: "100%", alignItems: "flex-start", flexWrap: "wrap" }}>
              {videos.map((vid, idx) => (
                <div key={idx} style={{ flex: 1, minWidth: "260px", borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
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


          <CTA />
        </div>
      </div>
    </PageTransition>
  );
};

export default InstantContent;
