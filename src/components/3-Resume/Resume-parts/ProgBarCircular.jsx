import React from "react";
// import { useState, useEffect } from "react";
import "./ProgressBar.css"

export default function ProgBarCircular({ skill, value, Lweek, Lmonth }) {
  // const [progress, setprogress] = useState(0);

  // useEffect(() => {
  //   const animate = setInterval(() => {
  //     setprogress((prevState) => {
  //       if (prevState <= value) {
  //         return prevState + 1;
  //       } else clearInterval(animate);
  //     });
  //   });
  // }, []);
  return (
    <div className="circularbar-container">
      <span className="circularbar-title">{skill}</span>
      <div
        className="circularbar-progress"
        style={{
          background: `conic-gradient(rgb(0, 79, 250) ${
            value * 3.6
          }deg, lightgray 0deg)`,
        }}
      >
        <span className="circularbar-val">
          <span>{value}%</span>
        </span>
      </div>
      <div className="circularbar-data">
        <div className="circularbar-sub-data">
          <span >{Lweek}%</span>
          <span>Last Week</span>
        </div>
        <hr />
        <div className="circularbar-sub-data">
          <span > {Lmonth}%</span>
          <span>Last Month</span>
        </div>
      </div>
    </div>
  );
}
