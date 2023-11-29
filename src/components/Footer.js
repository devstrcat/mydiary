import React from "react";
import { FooterBotBar } from "../styles/footerstyle";

const Footer = ({ children }) => {
  return (
    <FooterBotBar>
      <h3>{children}</h3>
    </FooterBotBar>
  );
};

export default Footer;
