import React from "react";
const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src="./images/heroImg.jpg" alt="img" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
            BCA 2 year student with a passion for front-end development.
            Actively learning HTML, CSS, and JavaScript to build dynamic web
            applications. Seeking opportunities to apply skills, contribute to
            projects, and grow professionally. Enthusiastic about exploring new
            technologies and staying updated with the latest industry trends.
            Let's connect and explore possibilities!
          </p>
          <a
            href="https://www.linkedin.com/in/akinurrahman/"
            target="_black"
            className="btn"
          >
            Read More on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
