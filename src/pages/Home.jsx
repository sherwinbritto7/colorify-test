import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ScrollingText from "../components/ScrollingText";
import PageTransition from "../components/PageTransition";
import WorksVideo from "../components/WorksVideo";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <WorksVideo />
      <Vision />
      <ScrollingText />
      <Testimonials />
    </PageTransition>
  );
};

export default Home;
