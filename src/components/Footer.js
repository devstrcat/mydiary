import React from "react";
import { FooterBotBar } from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <FooterBotBar>
      <Link to="/home">{props.children}</Link>
    </FooterBotBar>
  );
};

export default Footer;
