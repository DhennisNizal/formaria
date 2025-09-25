import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { navItems } from "../navbar/links";

import * as S from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Logo>Formaria</S.Logo>
          <IoIosMenu className="menu-icon" onClick={() => setOpen(true)} />
        </S.Container>
      </S.Wrapper>

      <S.Sidebar open={open}>
        {navItems.map((item, index) => (
          <S.NavItem key={index} href={item.href}>
            {item.label}
          </S.NavItem>
        ))}
        <S.BookButton>Book now</S.BookButton>
      </S.Sidebar>

      <S.Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default Header;
