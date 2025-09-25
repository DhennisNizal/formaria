import HeroThumbnail from "../../assets/hero-cover.webp";
import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const HeroWrapper = styled.section`
  background-image: linear-gradient(
      to bottom,
      ${color.transparent}30%,
      ${color.black} 100%
    ),
    url(${HeroThumbnail});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  margin: 1.5rem auto 0 auto;
  border-radius: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${breakpoint.mobile} {
    height: 100vh;
    border-radius: 0;
    margin: auto;
  }

  ${breakpoint.tablet} {
    height: 92vh;
  }

  .content {
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: ${color.white};
      font-family: "Oswald", sans-serif;
      font-size: 3rem;
      margin: 0;
      line-height: 3.5rem;
      text-align: center;
      max-width: 95%;
    }

    p {
      color: ${color.white};
      font-size: 1.1rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      max-width: 90%;
      line-height: 1.5rem;
    }

    ${breakpoint.tablet} {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }

    ${breakpoint.mobile} {
      h1 {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
