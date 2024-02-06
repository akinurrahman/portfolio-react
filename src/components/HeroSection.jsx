import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Akinur Rahman</h1>
          <h3>
            And I'm a <span>Frontend Developer</span>
          </h3>
          <p>
            Welcome to my portfolio! As a frontend developer, I bring visions to
            life with stunning websites that harmonize functionality,
            innovation, and an unparalleled user experience. Let's collaborate
            and make an impact!
          </p>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/akinurrahman/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/917099119857" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/akinurrahman_/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:akinurrahmanofficial@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
           <a className="btn " href="https://drive.google.com/file/d/1kt1sbm4BiH_ZRZusFqn4LnnI7eMvb-gz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>

        <div className="home-img">
          <img src="./images/heroImg.jpg" alt="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;





