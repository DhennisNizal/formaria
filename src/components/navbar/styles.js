import styled from "styled-components";
import { color } from "../../styles";
import { Button } from "antd";

export const Wrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "scrollDirection",
})`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  /* slide effect */
  position: fixed;
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-120px" : "1rem"};
  left: 0;
  width: 100%;
  transition: top 0.4s ease-in-out;
  z-index: 1000;
`;

export const Container = styled.div`
  min-width: 70%;
  padding: 0.8rem 2rem;
  background-color: ${color.white};
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${color.brown};
`;

export const Navlinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.a`
  cursor: pointer;

  &:hover {
    color: ${color.brown};
  }
`;

export const BookButton = styled(Button)`
  && {
    background-color: ${color.brown};
    color: ${color.white};
    border: none;
    padding: 1.2rem;

    &:hover {
      background-color: ${color.brown} !important;
      color: ${color.white} !important;
      transform: scale(1.03);
    }
  }
`;
