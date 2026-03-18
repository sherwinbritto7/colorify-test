import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the Colorify Media website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website."
    },
    {
      title: "2. Our Services",
      content: "Colorify Media provide event production and atmosphere architecture services. Information is provided for general guidance only. We reserve the right to modify or discontinue any part of our services without notice."
    },
    {
      title: "3. Intellectual Property",
      content: "All content—including text, images, logos, and graphics—is property of Colorify Media and protected by copyright laws. You may not reproduce or use our content without written permission."
    },
    {
      title: "4. User Conduct",
      content: "You agree to use our website for lawful purposes only. You may not damage, disable, or impair our server or network, or interfere with any other party's use of the website."
    },
    {
      title: "5. Disclaimer of Warranties",
      content: "Our website is provided 'as is' without any warranties. Colorify Media does not guarantee that the site will always be available, secure, or free from errors or viruses."
    },
    {
      title: "6. Limitation of Liability",
      content: "Colorify Media shall not be liable for any direct, indirect, or consequential damages resulting from your use or inability to use our site or services."
    },
    {
      title: "7. Governing Law",
      content: "These Terms of Service are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra."
    },
    {
      title: "8. Changes to Terms",
      content: "We may update these Terms of Service. Your continued use of the website after changes indicates your acceptance of the revised terms."
    }
  ];

  return (
    <PageTransition>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <style>{`
          .legal-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
            align-items: start;
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          .legal-sidebar {
            position: sticky;
            top: 8rem;
          }

          .legal-content-list {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          .legal-section h2 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: var(--brand-yellow);
            font-weight: 700;
            letter-spacing: -0.01em;
          }
          .legal-section p {
            line-height: 1.7;
            color: var(--text-secondary);
            font-size: 1rem;
          }
          @media (max-width: 1024px) {
            .legal-grid {
              grid-template-columns: 1fr;
              gap: 4rem;
              padding-top: 10rem;
            }
            .legal-sidebar {
              position: relative;
              top: 0;
            }
          }
        `}</style>

        <section>
          <div className="container">
            <div className="legal-grid">
              {/* Left Side: Header & Intro */}
              <div className="legal-sidebar">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    color: "var(--brand-yellow)",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  Legal Document
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontWeight: 900,
                    marginBottom: "2rem"
                  }}
                >
                  TERMS OF <br />
                  <span className="gradient-text">SERVICE</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    maxWidth: "400px"
                  }}
                >
                   Read these terms carefully before using our services. 
                   By accessing our site, you agree to comply with these guidelines.
                </motion.p>

                <div style={{ 
                  marginTop: "3rem", 
                  paddingTop: "2rem", 
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "1px"
                }}>
                  LAST UPDATED: MARCH 18, 2026
                </div>
              </div>

              {/* Right Side: The List */}
              <div className="legal-content-list">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                    className="legal-section"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      padding: "2.5rem",
                      borderRadius: "24px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)"
                    }}
                  >
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
