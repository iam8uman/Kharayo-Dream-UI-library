import Feature from "@/components/Feature";
import FeaturesSection from "@/components/FeatursSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* <Landing /> */}
      <Hero />
      <FeaturesSection />
      <Feature />
      <Testimonials />
      <Footer />
    </>
  );
}
