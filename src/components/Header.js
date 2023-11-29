import React from "react";
import { HButton, HTopBar } from "../styles/headerstyle";

const Header = ({ children }) => {
  return (
    <HTopBar>
      <HButton>
        <img src="images/bt_list.svg" />
      </HButton>
      <h2>{children}</h2>
      <HButton>
        <img src="images/bt_login.svg" />
      </HButton>
    </HTopBar>
  );
};

export default Header;
