import React from "react";
import PageLayout from "../components/page-layout";
import Hero from "../modules/hero";
import About from "../modules/about";
import Rooms from "../modules/rooms";
import WhyChooseUs from "../modules/why-choose-us";

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Rooms />
      <WhyChooseUs />
    </PageLayout>
  );
};

export default HomePage;
