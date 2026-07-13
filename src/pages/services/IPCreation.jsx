import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { Users, Shield, Layers, Award, CheckCircle, Heart, Search, BookOpen, Film, Radio } from "lucide-react";
import CTA from "../../components/CTA";
import CaseStudy from "../../components/CaseStudy";

const IPCreation = () => {
  const videos = [
    { embedId: "JwbK6MR9lhE", title: "Who Is The Boss", desc: "Original IP production showcasing bold storytelling and cinematic world-building." },
    { embedId: "f077hcY-lK0", title: "BRETT LEE TV", desc: "Original digital show concept featuring cricket legend Brett Lee." },
    { embedId: "l8I7B139P48", title: "Classic Men", desc: "A proprietary branded series blending style, culture, and high-production value." },
    { embedId: "DJt0G0_AVMk", title: "BRETT LEE TV", desc: "Original digital show concept featuring cricket legend Brett Lee." }
  ];

  const processSteps = [
    { title: "Empathize", subtitle: "Audience Subcultures", desc: "Analyzing consumer behaviors, content habits, and cultural gaps.", icon: Heart },
    { title: "Define", subtitle: "Franchise Bible", desc: "Defining show premise, visual identity, character dynamics, and brand alignment.", icon: Search },
    { title: "Ideate", subtitle: "Writers' Room", desc: "Drafting script treatments, story boards, and pilot concept drafts.", icon: BookOpen },
    { title: "Design", subtitle: "Pilot Production", desc: "Directing pilot episodes, designing key art assets, and setting distribution structures.", icon: Film },
    { title: "Test", subtitle: "Launch & Metric", desc: "Running test releases, examining viewer engagement metrics, and securing co-production deals.", icon: Radio }
  ];

  const solutionFeatures = [
    {
      title: "Original IP Incubation",
      points: [
        "Developing unique story concepts, characters, and show formats from initial drafts to pitch-ready pilots.",
        "Episodic show formats tailored to web audiences.",
        "Talent mapping and script blueprint development."
      ]
    },
    {
      title: "Strategic Co-Production",
      points: [
        "Collaborating with leading studios and distributors to maximize content reach and production scale.",
        "Cross-network community amplification.",
        "Co-development deal structuring and funding alignment."
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

          {/* Case Study Section */}
          <CaseStudy
            accentColor="#f26522"
            problemTitle="Transactional Content Fatigue & Ad-Spend Inflation"
            problemDesc="In a saturated landscape, standard transactional campaigns struggle to build organic audience loyalty. Brands face:"
            problemPoints={[
              "Spiraling ad-acquisition costs with diminishing returns.",
              "Lack of community ownership and audience engagement.",
              "Short content shelf-lives that fail to yield long-term media equity."
            ]}
            problemConclusion="Building long-term asset value through proprietary show IP yields 5x the organic reach of traditional media buy cycles."
            solutionTitle="Original IP Incubation & Franchise Architecture"
            solutionDesc="We develop and license proprietary show formats and digital web franchises that embed brands directly into audience subcultures:"
            solutionFeatures={solutionFeatures}
            processTitle="FRANCHISE INCUBATION PROCESS"
            processSteps={processSteps}
          />

          {/* Work Videos */}
          <section style={{ minHeight: "auto", padding: "0 0 4rem 0" }}>
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
