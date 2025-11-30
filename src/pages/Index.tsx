import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import IndustrialServices from "@/components/IndustrialServices";
import HomeServices from "@/components/HomeServices";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Expertise />
      <IndustrialServices />
      <HomeServices />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
