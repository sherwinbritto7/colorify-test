import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out our contact form or subscribe to our newsletter. This may include your name, email address, phone number, and any other details you provide about your project or inquiry."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to respond to your inquiries, provide the services you request, and improve our website's user experience. We do not sell or rent your personal information to third parties."
    },
    {
      title: "3. Data Security",
      content: "We implement reasonable security measures to protect the confidentiality and integrity of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure."
    },
    {
      title: "4. Cookies and Tracking",
      content: "Our website may use cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect site functionality."
    },
    {
      title: "5. Third-Party Links",
      content: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their policies separately."
    },
    {
      title: "6. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. The 'Last Updated' date at the bottom of this page will indicate when the latest changes were made."
    },
    {
      title: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at hello@colorify.media or via our contact page."
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
            color: var(--brand-teal);
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
              gap: 3rem;
              padding-top: 6rem;
              padding-bottom: 4rem;
            }
            .legal-sidebar {
              position: relative;
              top: 0;
            }
            .legal-content-list {
              gap: 2rem;
            }
            .legal-section {
              padding: 1.5rem !important;
              border-radius: 16px !important;
            }
            .legal-section h2 {
              font-size: 1.2rem;
            }
            .legal-section p {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 768px) {
            .legal-grid {
              padding-top: 5rem;
              gap: 2rem;
            }
            .legal-sidebar h1 {
              font-size: 3rem !important;
            }
            .legal-sidebar p {
              font-size: 1rem !important;
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
                    color: "var(--brand-teal)",
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
                  PRIVACY <br />
                  <span className="gradient-text">POLICY</span>
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
                  Your privacy is paramount. This policy outlines how Colorify Media 
                  manages and protects your personal data in our production environment.
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

export default PrivacyPolicy;
