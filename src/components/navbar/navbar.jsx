import React from "react";
import { HashLink } from "react-router-hash-link";
import { navItems } from "./links";
import * as S from "./styles";
import hideOnScroll from "../../utils/helpers/hideOnScroll";

const Navbar = () => {
  const scrollDirection = hideOnScroll();

  const scrollWithOffset = (el) => {
    const yOffset = -128; // 8rem offset
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <S.Wrapper scrollDirection={scrollDirection}>
      <S.Container>
        <HashLink smooth to="#hero" scroll={scrollWithOffset}>
          <S.Logo>Formaria</S.Logo>
        </HashLink>

        <S.Navlinks>
          {navItems.map((item, index) => (
            <S.NavItem key={index}>
              <HashLink smooth to={item.to} scroll={scrollWithOffset}>
                {item.label}
              </HashLink>
            </S.NavItem>
          ))}
        </S.Navlinks>

        <S.BookButton>Book now</S.BookButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default Navbar;
