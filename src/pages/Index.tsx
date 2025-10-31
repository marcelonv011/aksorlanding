import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
