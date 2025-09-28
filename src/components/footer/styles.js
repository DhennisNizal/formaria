import styled from "styled-components";
import { Button } from "antd";
import { color, breakpoint } from "../../styles";

export const FooterWrapper = styled.section`
  width: 100%;
  height: auto;
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${breakpoint.mobile} {
    gap: 0;
  }
`;

export const TopContent = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  padding: 4rem 1.5rem;
  background-image: linear-gradient(
    to right,
    #a39262 10%,
    #242015 50%,
    #a39262 100%
  );

  ${breakpoint.mobile} {
    border-radius: 0;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  p {
    margin: 0;
    color: ${color.lightBrown};
    line-height: 1.4rem;
    width: 60%;

    ${breakpoint.mobile} {
      width: 90%;
    }
  }

  h4 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${color.lightBrown};
  }
`;

export const MessageButton = styled(Button)`
  background-color: ${color.lightBrown};
  padding: 1.2rem 2rem;
  font-weight: 500;
  color: ${color.darkGray};
  border: none;

  &:hover {
    background-color: ${color.lightBrown} !important;
    color: ${color.darkGray} !important;
    transform: scale(1.02);
  }
`;

export const BottomContent = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  background-color: ${color.lightBrown};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
  text-align: left;

  ${breakpoint.mobile} {
    border-radius: 0;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .logo,
    .navlinks,
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      align-content: center;
    }

    li {
      justify-content: center;
    }
  }

  h1 {
    color: ${color.brown};
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${color.darkGray};
  }

  p {
    margin: 0.3rem 0;
    color: ${color.darkGray};
    font-size: 0.95rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .navlinks li {
    cursor: pointer;

    &:hover {
      color: ${color.brown};
    }
  }

  li {
    margin: 0.3rem 0;
    color: ${color.darkGray};
    font-size: 0.95rem;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;
