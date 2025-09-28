import React from "react";
import * as S from "./styles";
import { topContent, navLinks, contactInfo, footerLogo } from "./data";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Content>
        <S.TopContent>
          <div className="infos">
            <h4>{topContent.title}</h4>
            <p>{topContent.description}</p>
            <S.MessageButton>Send Message</S.MessageButton>
          </div>
        </S.TopContent>

        <S.BottomContent>
          {/* Navigation */}
          <div className="navlinks">
            <h4>Navigation Links</h4>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>{link.label}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="contact">
            <h4>Contact Information</h4>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  {item.icon} {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="logo">
            <h1>{footerLogo.title}</h1>
            <p>{footerLogo.developer}</p>
            <p>{footerLogo.rights}</p>
          </div>
        </S.BottomContent>
      </S.Content>
    </S.FooterWrapper>
  );
};

export default Footer;
