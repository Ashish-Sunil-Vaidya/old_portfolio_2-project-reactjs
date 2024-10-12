import React from "react";
import eduDatas from "./Resume-DataSet/data_edu";
import skilldata from "./Resume-DataSet/data_skill";
import ProgBarCircular from "./Resume-parts/ProgBarCircular";
import ProgBarRectangular from "./Resume-parts/ProgBarRectangular";
import ResumeNav from "./Resume-parts/ResumeNav";
import { MortarboardFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const edudataarr = eduDatas.map(
    ({ id, duration, course, institution, certification }, index) => {
      return (
        <div key={id} data-aos="fade-up">
          <div data-aot-delay={index * 1000} className="edu-item">
            <div className="edu-icon">
              <MortarboardFill fontSize={30} color="white" />
            </div>
            <div className="edu-info">
              <span>{duration}</span>
              <h2>{course}</h2>
              <h3>{institution}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                accusamus totam cupiditate accusantium dolorum repellendus odit,
                beatae deleniti? Ut iusto, delectus tempore ab quas, impedit eum
                eaque consequatur, excepturi assumenda numquam sint.
              </p>
            </div>
            <div className="edu-certification">
              <h4>Certification</h4>
              <button href={certification} target="_blank">
                View Document
              </button>
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
      );
    }
  );

  const skillsdataarr = skilldata.map(
    ({ id, skill, percentage, Lweek, Lmonth }, index) => {
      if (index < 3) {
        return (
          <div
            data-aos="fade-down"
            data-aos-delay={index * 300}
            className="skills-item-main"
            key={id}
          >
            <ProgBarCircular
              skill={skill}
              value={percentage}
              Lweek={Lweek}
              Lmonth={Lmonth}
            />
          </div>
        );
      } else
        return (
          <div
            data-aos="fade-down"
            offset={50}
            className="skills-item-other"
            key={id}
          >
            <ProgBarRectangular skill={skill} value={percentage} />
          </div>
        );
    }
  );

  return (
    <section id="resume">
      <h1 className="heading">Resume</h1>

      <div className="resume-content">
        <div id="edu" className="edu-content">
          <hr />
          {edudataarr}
        </div>
        <div id="skill" className="skills-content">
          <h1>Skills</h1>
          <div className="skills-main">{skillsdataarr.slice(0, 3)}</div>
          <div className="skills-other">{skillsdataarr.slice(3)}</div>
        </div>
      </div>
    </section>
  );
}
