import React from "react";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
    </header>
  );
}

export default Header;
