import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { CheckCircle, Brain, Heart, Paintbrush, Play, CheckSquare } from "lucide-react";
import CTA from "../../components/CTA";
import CaseStudy from "../../components/CaseStudy";

const Editing = () => {
  const videos = [
    {
      embedId: "WJYVJMzsGqQ",
      title: "Hindustan Zinc",
      desc: "High-impact brand film with precision color grading and editorial pacing."
    },
    {
      embedId: "UGLeKnZOjZc",
      title: "Kareena Miarcus DVC",
      desc: "Dynamic cuts and color grading for a bold personal brand showcase."
    },
    {
      embedId: "3yaQYxJCKXU",
      title: "Plum Perfumes",
      desc: "Social-first reel edited for instant engagement and platform optimization."
    },
    {
      embedId: "-FpUxsyHEwQ",
      title: "Yamaha RayZ",
      desc: "High-energy product reel with precision audio sync and motion graphics."
    },
  ];

  const processSteps = [
    { title: "Empathize", subtitle: "Define Mood", desc: "Understanding the client's brand identity, message, and audience emotional drivers.", icon: Heart },
    { title: "Define", subtitle: "Visual Script", desc: "Locking pacing patterns, references, and the overall color grade direction.", icon: Brain },
    { title: "Ideate", subtitle: "Timeline assembly", desc: "Constructing the rough cut, syncing audio stems, and establishing general timing.", icon: Play },
    { title: "Design", subtitle: "Polishing", desc: "Applying advanced color grading, sound design, and custom visual effects.", icon: Paintbrush },
    { title: "Test", subtitle: "Retention Check", desc: "Validating viewer attention metrics, executing final renders, and client review.", icon: CheckSquare }
  ];

  const solutionFeatures = [
    {
      title: "Advanced Color Grading",
      points: [
        "Crafting customized color palettes to establish the exact mood and visual signature.",
        "Custom look-up tables (LUTs) to establish brand identity.",
        "HDR and SDR grading optimizations."
      ]
    },
    {
      title: "Precision Video Editing",
      points: [
        "Rhythmic and logical pacing that keeps the audience hooked.",
        "Retention-optimized hooks in the first 3 seconds.",
        "Dynamic sequencing and structural narrative pacing."
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
            CREATIVE <span className="gradient-text">EDITING</span> SERVICES
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
            Post-production is where the magic truly comes together. 
            We specialize in advanced editing, color grading, sound design, and pacing 
            to transform raw footage into a cohesive, emotionally resonant story.
          </motion.p>

          {/* Case Study Section */}
          <CaseStudy
            accentColor="#7b3f9e"
            problemTitle="Ineffective Rhythms & Visual Disconnections"
            problemDesc="Raw footage often suffers from inconsistent lighting, disjointed narrative pacing, and audio synchronization issues. This fragmentation leads to:"
            problemPoints={[
              "Confusing viewer journeys and quick drop-offs.",
              "Inconsistent grading failing to convey the brand's intended emotion.",
              "Lags or jarring cuts that break immersion during high-stakes messaging."
            ]}
            problemConclusion="Average retention rate drops by over 45% when editorial pacing is off by even a few frames."
            solutionTitle="Precision Color Tuning & Rhythmic Cuts"
            solutionDesc="We implement a multi-phase post-production pipeline to harmonize story, color, and sound into one seamless flow:"
            solutionFeatures={solutionFeatures}
            processTitle="EDITORIAL PROCESS"
            processSteps={processSteps}
          />

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 4rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Works</h2>
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

export default Editing;
