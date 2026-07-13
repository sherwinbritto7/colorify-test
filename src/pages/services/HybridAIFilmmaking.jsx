import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { Sparkles, Cpu, Image, CheckCircle, Heart, Layers, Eye } from "lucide-react";
import CTA from "../../components/CTA";
import CaseStudy from "../../components/CaseStudy";

const HybridAIFilmmaking = () => {
  const videos = [
    { embedId: "m7yt96oS1_0", title: "Cafe Ad", desc: "A cinematic cafe advertisement blending AI-enhanced pre-viz with live-action storytelling." },
    { embedId: "Kn7PYvxhrXI", title: "Kellogg's", desc: "Bold brand film for Kellogg's merging smart CGI integration with high-energy live footage." },
    { embedId: "xQKtQuDrj8k", title: "Development Wellness", desc: "A wellness brand narrative powered by neural post-production and immersive visual design." }
  ];

  const processSteps = [
    { title: "Empathize", subtitle: "Align Vision", desc: "Understanding the creative vision, limits of physical sets, and production constraints.", icon: Heart },
    { title: "Define", subtitle: "Mapping Rules", desc: "Establishing custom AI models, key visual parameters, and style maps.", icon: Cpu },
    { title: "Ideate", subtitle: "Concept Iteration", desc: "Generating high-fidelity pre-viz assets, visual boards, and backdrop layouts.", icon: Sparkles },
    { title: "Design", subtitle: "Hybrid Shoot", desc: "Filming actors against live plates and blending with AI neural backdrops.", icon: Layers },
    { title: "Test", subtitle: "Quality Control", desc: "Running upscaling models, verifying dynamic range, and checking composite fidelity.", icon: Eye }
  ];

  const solutionFeatures = [
    {
      title: "AI-Enhanced Pre-Viz",
      points: [
        "Using advanced generative design for fast prototyping of storyboards, characters, and set concepts.",
        "Interactive storyboard rendering within hours.",
        "Costume and style consistency mapping."
      ]
    },
    {
      title: "Smart CGI Integration",
      points: [
        "Seamless blending of physically captured live action with real-time rendered virtual backdrops.",
        "Real-time dynamic lighting adjustments.",
        "Green-screen elimination using neural projections."
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

          {/* Case Study Section */}
          <CaseStudy
            accentColor="#29abe2"
            problemTitle="High Production Barriers & Creative Latency"
            problemDesc="Classical CGI and production setups require weeks of rendering, expensive set design, and long pre-production cycles. Traditional approaches face:"
            problemPoints={[
              "Extreme budget dependencies restricting smaller projects.",
              "Slow iteration speeds for cinematic concepts and storyboards.",
              "Complex green-screen setups that fail to deliver natural light reflections."
            ]}
            problemConclusion="Production schedules are delayed by over 60% on average during classical VFX feedback loops."
            solutionTitle="AI-Integrated Pre-Viz & Smart CGI Synthesis"
            solutionDesc="We blend traditional cinematic techniques with neural generative networks and real-time CGI to build an agile production pipeline:"
            solutionFeatures={solutionFeatures}
            processTitle="HYBRID PRODUCTION PROCESS"
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

export default HybridAIFilmmaking;
