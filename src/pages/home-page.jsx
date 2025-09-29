import React from "react";
import PageLayout from "../components/page-layout";
import Hero from "../modules/hero";
import About from "../modules/about";
import Rooms from "../modules/rooms";
import WhyChooseUs from "../modules/why-choose-us";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <PageLayout>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <Rooms />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </PageLayout>
  );
};

export default HomePage;
