import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ScrollingText from "../components/ScrollingText";
import PageTransition from "../components/PageTransition";
import WorksVideo from "../components/WorksVideo";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <WorksVideo />
      <ScrollingText />
      <Vision />
    </PageTransition>
  );
};

export default Home;
