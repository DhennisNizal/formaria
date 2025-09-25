import React from "react";
import { navItems } from "./links";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Wrapper>
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
