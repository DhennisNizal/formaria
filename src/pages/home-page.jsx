import React, { lazy, Suspense } from "react";
import PageLayout from "../components/page-layout";
import Loader from "../components/loader";

const Hero = lazy(() => import("../modules/hero"));
const About = lazy(() => import("../modules/about"));
const Rooms = lazy(() => import("../modules/rooms"));
const WhyChooseUs = lazy(() => import("../modules/why-choose-us"));
const Footer = lazy(() => import("../components/footer"));

const HomePage = () => {
  return (
    <PageLayout>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </PageLayout>
  );
};

export default HomePage;
