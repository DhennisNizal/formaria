import styled from "styled-components";
import { Button } from "antd";
import { color, shadow, breakpoint } from "../../styles";

export const Wrapper = styled.nav`
  font-family: "Roboto", sans-serif;

  ${breakpoint.tablet} {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  padding: 0.8rem 2rem;
  background-color: ${color.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoint.tablet} {
    width: 80%;
    border-radius: 2rem;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
  }

  .menu-icon {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavItem = styled.a`
  cursor: pointer;
  width: 100%;
  padding: 1rem 0;
  color: ${color.black};
  border-bottom: 1px solid ${color.lightGray};
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background-color: ${color.white};
  border-radius: 0 1.2rem 1.2rem 0;
  box-shadow: ${shadow.thin};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 4rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  opacity: ${(props) => (props.open ? "1" : "0")};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

export const Logo = styled.h1`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${color.brown};
`;

export const BookButton = styled(Button)`
  && {
    background-color: ${color.brown};
    color: ${color.white};
    border: none;
    padding: 1.2rem;
    margin-top: 3rem;

    &:hover {
      background-color: ${color.brown} !important;
      color: ${color.white} !important;
      transform: scale(1.03);
    }
  }
`;
