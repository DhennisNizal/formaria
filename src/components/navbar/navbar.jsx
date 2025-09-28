import React from "react";
import { navItems } from "./links";
import * as S from "./styles";
import hideOnScroll from "../../utils/helpers/hideOnScroll";

const Navbar = () => {
  const scrollDirection = hideOnScroll();

  return (
    <S.Wrapper scrollDirection={scrollDirection}>
      <S.Container>
        <S.Logo>Formaria</S.Logo>

        <S.Navlinks>
          {navItems.map((item, index) => (
            <S.NavItem key={index}>{item.label}</S.NavItem>
          ))}
        </S.Navlinks>

        <S.BookButton>Book now</S.BookButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default Navbar;
