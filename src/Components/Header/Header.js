import React from "react";
import "./Header.css";
import HeaderNavigation from "../Navigation/HeaderNavigation/HeaderNavigation";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
function Header() {
  return (
    <>
      <HeaderNavigation />
      <div className="header">
        <HeaderInfo />
      </div>
    </>
  );
}

export default Header;
