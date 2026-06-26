import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ScrollingText from "../components/ScrollingText";
import PageTransition from "../components/PageTransition";
import WorksVideo from "../components/WorksVideo";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <WorksVideo />
      <Vision />
      <Brands />
      <ScrollingText />
      <Testimonials />
    </PageTransition>
  );
};

export default Home;
