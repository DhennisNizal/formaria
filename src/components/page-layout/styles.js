import styled from "styled-components";
import { breakpoint } from "../../styles";

export const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 1.5rem;

  ${breakpoint.mobile} {
    padding: 0;
  }
`;

export const NavbarWrapper = styled.div`
  display: none;

  ${breakpoint.desktop} {
    display: block;
  }
`;

export const HeaderWrapper = styled.div`
  display: none;

  ${breakpoint.tablet} {
    display: block;
  }
  ${breakpoint.mobile} {
    display: block;
  }
`;
