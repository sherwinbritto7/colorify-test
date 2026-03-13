import Contact from "../components/Contact";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const ContactNowPage = () => {
  return (
    <PageTransition>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Hero Section */}

        <Contact />

        {/* Spacer for scroll completion */}
        <div style={{ height: "10vh" }} />
      </div>
    </PageTransition>
  );
};

export default ContactNowPage;
