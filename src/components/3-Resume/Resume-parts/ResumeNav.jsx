import React from "react";
import * as Scroll from "react-scroll";

export default function ResumeNav() {

  let Link = Scroll.Link;
  return (
    <nav className="resume-navbar">
      <div className="resume-navbar-items">
        <div>
          <Link
            className="resumetab"
            activeClass="isActiveRes"
            smooth
            spy
            to="edu"
          >
            <div className="res-nav-item">
              <div className="res-nav-border"></div>
              <span>Education</span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className="resumetab"
            activeClass="isActiveRes"
            smooth
            spy
            to="skill"
          >
            <div className="res-nav-item">
              <div className="res-nav-border"></div>
              <span> Skills</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
