import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { Camera, Film, Play, Award, CheckCircle, Heart, Search, BookOpen, CheckSquare } from "lucide-react";
import CTA from "../../components/CTA";
import CaseStudy from "../../components/CaseStudy";

const PrePostProduction = () => {
  const videos = [
    { embedId: "j3zo90xCSzs", title: "Aldar", desc: "Cinematic showcase for Aldar." },
    { embedId: "oUP5oCU918M", title: "Ranvijay", desc: "High-energy editorial and action capture." },
    { embedId: "Wrc7r-KjL6o", title: "Rangreza", desc: "Stunning narrative and color grading display." }
  ];

  const processSteps = [
    { title: "Empathize", subtitle: "Brand Brief", desc: "Understanding the client's business goals, core message, and target demographic.", icon: Heart },
    { title: "Define", subtitle: "Lock Script", desc: "Locking the screenplay, visual storyboard, budget parameters, and shoot dates.", icon: Search },
    { title: "Ideate", subtitle: "Scouting & Pre-viz", desc: "Scouting filming locations, finalizing casting, and setting scene blocking.", icon: BookOpen },
    { title: "Design", subtitle: "Unified Capture", desc: "Executing high-end filming and handling post-production assembly and color grading.", icon: Film },
    { title: "Test", subtitle: "Master Quality Check", desc: "Running sound mixes, checking screen compatibility, and client sign-off.", icon: CheckSquare }
  ];

  const solutionFeatures = [
    {
      title: "Script & Concept Development",
      points: [
        "Collaborative brainstorming and professional scriptwriting to build a compelling narrative.",
        "Visual style frames and comprehensive mood boards.",
        "Production scheduling and budgeting blueprint locks."
      ]
    },
    {
      title: "High-End Cinematography",
      points: [
        "Equipped with state-of-the-art camera systems (ARRI/RED/Sony), specialized lighting, and expert crews.",
        "Creative frame blocking and custom camera movement layout.",
        "High-definition digital asset acquisition."
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
            PRE TO <span className="gradient-text">POST</span> PRODUCTION
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
            We cover the entire filmmaking lifecycle, transforming raw ideas into cinematic masterpieces. 
            From initial concept mapping and script development to high-end filming and post-production, 
            our professional team ensures every frame meets absolute visual excellence.
          </motion.p>

          {/* Case Study Section */}
          <CaseStudy
            accentColor="#c5d429"
            problemTitle="Creative Friction & Fragmented Pipelines"
            problemDesc="Managing multiple separate vendors for scripting, directing, filming, and post-production causes translation errors. This fragmentation leads to:"
            problemPoints={[
              "Creative misalignment and loss of narrative focus.",
              "Budget leakages due to repeated setup handovers and communication gaps.",
              "Inconsistent visual tone and varying grading standards across final deliverables."
            ]}
            problemConclusion="Up to 30% of a production budget is wasted on managing miscommunications between disjointed production vendors."
            solutionTitle="End-to-End Creative Continuity"
            solutionDesc="We cover the entire lifecycle under one unified studio roof to guarantee that the director's script intent matches the final color grade:"
            solutionFeatures={solutionFeatures}
            processTitle="PRODUCTION LIFECYCLE"
            processSteps={processSteps}
          />

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 4rem 0" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0", marginBottom: "1.5rem", textTransform: "uppercase" }}>Featured Works</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              {videos.map((vid, idx) => (
                <div key={idx} style={{ width: "100%", borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                    {vid.embedId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${vid.embedId}?autoplay=1&mute=1&loop=1&playlist=${vid.embedId}&controls=1&rel=0`}
                        title={vid.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                    ) : (
                      <video
                        src={vid.src}
                        controls
                        muted
                        loop
                        playsInline
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    )}
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

export default PrePostProduction;
