import React, { useState } from "react";
const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Portfolio
        </a>

        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <a
            href="#home"
            onClick={() => setIsNavActive((prev) => !prev)}
          >
            Home
          </a>
          <a href="#about" onClick={() => setIsNavActive((prev) => !prev)}>
            About
          </a>
          <a href="#education" onClick={() => setIsNavActive((prev) => !prev)}>
            Education
          </a>
          <a href="#portfolio" onClick={() => setIsNavActive((prev) => !prev)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsNavActive((prev) => !prev)}>
            Contact
          </a>
        </nav>
        <div
          className="hamburger-container"
          onClick={() => setIsNavActive((prev) => !prev)}
        >
          <i
            className={`fa-solid ${
              isNavActive ? "fa-xmark" : "fa-bars"
            } hamburger-icon`}
          ></i>
        </div>
      </header>
    </>
  );
};

export default Header;
