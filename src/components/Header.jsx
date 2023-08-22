import React, { useState } from "react";
const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Portfolio
        </a>

        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hamburger-container" onClick={handleClick}>
          <i className={`fa-solid ${isNavActive ? "fa-xmark" : "fa-bars"} hamburger-icon`}></i>
        </div>
      </header>
    </>
  );
};

export default Header;
