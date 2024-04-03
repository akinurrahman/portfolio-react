import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <p>
            Copyright &copy; {new Date().getFullYear()} by Akinur Rahman | All right
            reserved
          </p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
