import ContactHeader from "../components/contact/ContactHeader";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const ContactNowPage = () => {
  return (
    <PageTransition>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <section
          style={{
            padding: "10rem 0 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Mega Background Orb */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60vw",
              height: "60vw",
              background:
                "radial-gradient(circle, #29abe215 0%, transparent 70%)",
              filter: "blur(120px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <ContactHeader />
            <ContactCards />
            <ContactForm />
            <ContactMap />
          </div>
        </section>

        {/* Spacer for scroll completion */}
        <div style={{ height: "10vh" }} />
      </div>
    </PageTransition>
  );
};

export default ContactNowPage;
