import React from "react";
import { GiBedLamp } from "react-icons/gi";

import * as S from "./styles";
import { aboutData } from "./data";

const About = () => {
  return (
    <S.AboutWrapper>
      <S.Content>
        <div className="about">
          <GiBedLamp aria-label={aboutData.brand.iconLabel} />
          <h3>{aboutData.brand.name}</h3>
        </div>

        <div className="who-we-are">
          <div className="infos">
            <h2>
              {aboutData.section.title.split(" ")[0]}{" "}
              <span>{aboutData.section.highlight}</span>{" "}
              {aboutData.section.title.split(" ")[2]}
            </h2>
            {aboutData.section.paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <img
            src={aboutData.section.image.src}
            alt={aboutData.section.image.alt}
            loading="lazy"
          />
        </div>
      </S.Content>
    </S.AboutWrapper>
  );
};

export default About;
