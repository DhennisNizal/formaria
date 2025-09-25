import React from "react";
import Navbar from "../navbar";
import Header from "../header";

import * as S from "./styles";

const PageLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.NavbarWrapper>
        <Navbar />
      </S.NavbarWrapper>

      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <main>{children}</main>
    </S.Wrapper>
  );
};

export default PageLayout;
