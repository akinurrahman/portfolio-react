import React from "react";
import projects from "../data/ProjectData";
const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>
        <div className="portfolio-container">
          {projects.map((project) => {
            const { id, background, titile, description, url, arrowIcon } =
              project;
            return (
              <div className="portfolio-cards" key={id}>
                <img src={background} alt="" />
                <div className="portfolio-layer">
                  <h4>{titile}</h4>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className={arrowIcon}></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
