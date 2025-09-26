import React from "react";
import PageLayout from "../components/page-layout";
import Hero from "../modules/hero";
import About from "../modules/about";

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
    </PageLayout>
  );
};

export default HomePage;
