import styled from "styled-components";
import { color, breakpoint } from "../../styles";
import InfoThumbnail from "../../assets/why-choose-us.webp";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 8rem;
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  height: auto;
  width: 90%;
  margin: auto;
`;

export const SectionTitle = styled.h3`
  width: 25rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${color.darkGray};
  font-family: "Roboto", sans-serif;

  span {
    color: ${color.brown};
  }

  ${breakpoint.mobile} {
    font-size: 1.8rem;
    width: 100%;
  }
`;

export const SectionInfos = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  gap: 1rem;

  ${breakpoint.tablet} {
    flex-direction: column;
    height: auto;
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${breakpoint.tablet} {
    width: 100%;
    height: auto;
  }

  ${breakpoint.mobile} {
    width: 100%;
    height: auto;
  }

  .top {
    width: 100%;
    height: 50%;
    display: flex;
    gap: 1rem;

    ${breakpoint.tablet} {
      height: auto;
    }

    ${breakpoint.mobile} {
      flex-direction: column;
      height: auto;
    }
  }

  .top-left,
  .top-right {
    width: 50%;
    height: 100%;
    border-radius: 1rem;
    background-color: ${color.lightKhaki};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${breakpoint.tablet} {
      height: auto;
    }

    ${breakpoint.mobile} {
      height: auto;
      width: 100%;
    }

    p {
      margin: 0;
      color: ${color.darkGray};
      line-height: 1.3rem;
      width: 80%;
    }

    h4 {
      margin: 2rem 0 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${color.brown};
    }

    svg {
      font-size: 4rem;
      color: ${color.brown};
      stroke-width: 1.5;
    }
  }

  .bottom {
    width: 100%;
    height: 50%;
    background-image: url(${InfoThumbnail});
    background-size: cover;
    background-position: center;
    border-radius: 1rem;

    ${breakpoint.tablet} {
      height: 15rem;
    }

    ${breakpoint.mobile} {
      height: 15rem;
    }
  }
`;

export const RightSide = styled.div`
  height: 100%;
  width: 30%;
  background-image: linear-gradient(to top, #242015 0%, #a39262 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  ${breakpoint.tablet} {
    width: 100%;
    gap: 3rem;
  }

  ${breakpoint.mobile} {
    width: 100%;
    gap: 3rem;
  }

  .rightside-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    margin: 1rem 0;
    color: ${color.lightBrown};
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: ${color.lightBrown};
    line-height: 1.3rem;
    width: 80%;
    text-align: center;
  }
`;
