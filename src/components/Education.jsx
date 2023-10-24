import React from "react";
import EducaitonData from "../data/EducationData";
const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Education</span>
        </h2>

        <div className="education-container">
          {EducaitonData.map((education) => {
            const { id, icon, title, description, url } = education;
            return (
              <div className="education-cards" key={id}>
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Education;
