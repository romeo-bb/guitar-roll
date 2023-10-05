import React from "react";
import Hero from "../components/Hero";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <SectionA />
      <SectionB />
      <Video />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home;