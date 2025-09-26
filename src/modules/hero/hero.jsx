import React from "react";
import { HeroWrapper } from "./styles";
import { heroData } from "./data";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="content">
        <h1>{heroData.heading}</h1>
        <p>{heroData.paragraph}</p>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
