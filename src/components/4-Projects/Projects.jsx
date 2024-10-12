import React, { useEffect } from "react";
import projectsData from "./data";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
useEffect(()=>
{
  Aos.init();
})

  const projecstdataarr = projectsData.map(
    ({ id, name, language, description, bg },index) => {
      return (
        <div data-aos="fade-up" className="projects-item" key={id}>
          <div className="projects-container">
            <img src={bg} alt="sdfsd" />
            <div className="overlay">
              <h1>{name}</h1>
              <h3>{language}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <section id="m4" className="projects">
      <div className="projects-content">
        <h1 className="heading">Projects</h1>
        <div className="projects-group">{projecstdataarr}</div>
      </div>
    </section>
  );
}
