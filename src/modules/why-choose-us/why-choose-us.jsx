import React from "react";
import * as S from "./styles";
import { leftFeatures, rightFeatures } from "./data";

const WhyChooseUs = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.SectionTitle>
          Why <span>Choose</span> Formaria
        </S.SectionTitle>
        <S.SectionInfos>
          <S.LeftSide>
            <div className="top">
              {leftFeatures.map((item, index) => (
                <div
                  key={index}
                  className={index === 0 ? "top-left" : "top-right"}
                >
                  <item.icon />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bottom"></div>
          </S.LeftSide>
          <S.RightSide>
            {rightFeatures.map((item, index) => (
              <div className="rightside-info" key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </S.RightSide>
        </S.SectionInfos>
      </S.Content>
    </S.Wrapper>
  );
};

export default WhyChooseUs;
