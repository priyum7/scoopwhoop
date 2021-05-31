import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderNavigation from "../Navigation/HeaderNavigation/HeaderNavigation";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import FloatingNavigation from "../Navigation/FloatingNavigation/FloatingNavigation";
function Header() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const updateFloatingNavStatus = () => {
      if (window.pageYOffset > 100) {
        console.log("Reached");
        setShowFloatingNav(true);
      } else setShowFloatingNav(false);
    };

    window.addEventListener("scroll", updateFloatingNavStatus);
    return () => {
      window.removeEventListener("scroll", updateFloatingNavStatus);
    };
  }, []);

  return (
    <>
      <HeaderNavigation />
      <div className="header">
        <HeaderInfo />
      </div>
      <FloatingNavigation display={showFloatingNav} />
    </>
  );
}

export default Header;
