import React from "react";
// import { useState, useEffect } from "react";
import "./ProgressBar.css"
export default function ProgBarRectangular({ skill, value }) {
  // const [progress, setprogress] = useState(0);

  // useEffect(() => {
  //   const animate = setInterval(() => {
  //     setprogress((prevState) => {
  //       if (prevState <= value) {
  //         return prevState + 1;
  //       } else clearInterval(animate);
  //     });
  //   },15);
  // }, []);

  return (
    <div className="rectbar-container">
      <div className="rectbar-skill-info">
        <h3>{skill}</h3>
        <h3 className="rectbar-val">{value}%</h3>
      </div>
      <div className="rectbar-flask">
        <div className="rectbar-progress" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
