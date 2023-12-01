import React from "react";
import { HButton, HTopBar } from "../styles/headerstyle";

const Header = props => {
  return (
    <HTopBar>
      <HButton
        onClick={() => {
          props.handleClickMenu();
        }}
      >
        <img src={`/images/${props.icon}`} />
      </HButton>
      <h2>{props.children}</h2>
      <HButton onClick={() => {}}>
        <img src="/images/bt_login.svg" />
      </HButton>
    </HTopBar>
  );
};

export default Header;
