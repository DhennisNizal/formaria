import React from "react";
import PageLayout from "../components/page-layout";
import Hero from "../modules/hero";
import About from "../modules/about";
import Rooms from "../modules/rooms";

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Rooms />
    </PageLayout>
  );
};

export default HomePage;
