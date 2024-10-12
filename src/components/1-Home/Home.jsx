import React from "react";
import TypeWriter from "typewriter-effect";
import { ArrowDownRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <section id="home">
      <div className="home-info">
        <span>HEY! I AM</span>
        <h1>Ashish Vaidya</h1>
        <h2>
          I'm a&nbsp;
          <span className="typed">
            <TypeWriter
              options={{
                strings: ["Student", "Web Designer", "App Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
        <div title="Go to About" className="point-positioner">
          <a href="#about" className="point"><ArrowDownRight className="arrow"  fontSize={20}/></a>
        </div>
      </div>
    </section>
  );
}
