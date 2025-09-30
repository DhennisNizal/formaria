import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { navItems } from "../navbar/links";
import hideOnScroll from "../../utils/helpers/hideOnScroll";

import * as S from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollDirection = hideOnScroll();

  const scrollWithOffset = (el) => {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <S.Wrapper scrollDirection={scrollDirection}>
        <S.Container>
          <HashLink smooth to="#hero" scroll={scrollWithOffset}>
            <S.Logo>Formaria</S.Logo>
          </HashLink>
          <IoIosMenu className="menu-icon" onClick={() => setOpen(true)} />
        </S.Container>
      </S.Wrapper>

      <S.Sidebar open={open}>
        {navItems.map((item, index) => (
          <S.NavItem key={index}>
            <HashLink
              smooth
              to={item.to}
              scroll={scrollWithOffset}
              onClick={() => setOpen(false)} // close sidebar after click
            >
              {item.label}
            </HashLink>
          </S.NavItem>
        ))}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          onClick={() => setOpen(false)}
        >
          <S.BookButton>Book now</S.BookButton>
        </HashLink>
      </S.Sidebar>

      <S.Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default Header;
