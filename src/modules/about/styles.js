import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const AboutWrapper = styled.section`
  margin: 8rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 90%;
  display: flex;
  gap: 1rem;

  ${breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    align-items: center;
  }

  .about {
    width: 30%;
    height: 24rem;
    border-radius: 20% 1rem 20% 1rem;
    background-color: ${color.brown};
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${breakpoint.tablet} {
      width: 100%;
      border-radius: 10% 1rem 10% 1rem;
      height: 20rem;
    }

    ${breakpoint.mobile} {
      border-radius: 15% 1rem 15% 1rem;
      width: 100%;
      height: 15rem;
    }

    svg {
      font-size: 8rem;
      color: ${color.brown};
      background-color: ${color.white};
      border-radius: 50%;
      padding: 2rem;

      ${breakpoint.mobile} {
        font-size: 7rem;
        padding: 1.5rem;
      }
    }

    h3 {
      margin: 0;
      color: ${color.white};
      font-size: 1.3rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
    }
  }

  .who-we-are {
    display: flex;
    width: 70%;

    ${breakpoint.tablet} {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    ${breakpoint.mobile} {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .infos {
      background-color: ${color.lightBrown};
      border-radius: 1rem 0 0 1rem;
      height: auto;
      align-content: center;
      padding: 1.5rem;
      color: ${color.darkGray};

      ${breakpoint.tablet} {
        border-radius: 1rem 1rem 0 0;
      }

      ${breakpoint.mobile} {
        border-radius: 1rem 1rem 0 0;
      }

      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 2rem;
        margin: 0;

        span {
          color: ${color.brown};
        }
      }

      p {
        line-height: 1.5rem;
        font-size: 1.1rem;

        &:nth-of-type(2) {
          padding-left: 1rem;
          border-left: 0.3rem solid ${color.brown};
        }
      }
    }

    img {
      object-fit: cover;
      height: 24rem;
      width: 50%;
      border-radius: 0 1rem 1rem 0;

      ${breakpoint.tablet} {
        width: 100%;
        border-radius: 0 0 1rem 1rem;
      }

      ${breakpoint.mobile} {
        width: 100%;
        border-radius: 0 0 1rem 1rem;
      }
    }
  }
`;
