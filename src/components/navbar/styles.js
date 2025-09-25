import styled from "styled-components";
import { color, shadow } from "../../styles";

import { Button } from "antd";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Container = styled.div`
  min-width: 70%;
  padding: 0.8rem 2rem;
  background-color: ${color.white};
  box-shadow: ${shadow.thin};
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
