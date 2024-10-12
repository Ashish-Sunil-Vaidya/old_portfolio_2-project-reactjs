import * as Scroll from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  let Link = Scroll.Link;

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  
  const [reset, setReset] = useState(false);
  const [menuStateMobile, setMenuStateMobile] = useState(true);
  const [menuStatePC, setMenuStatePC] = useState(true);
  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight) {
        setMenuStateMobile((prevState) => false);
        setMenuStatePC((prevState) => false);
      } else {
        setMenuStateMobile((prevState) => true);
        setMenuStatePC((prevState) => true);
        setReset((prevState) => false);
      }
    });

    addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setMenuStatePC((prevState) => true);
        setMenuStateMobile((prevState) => false);
        setReset((prevState) => false);
      } else {
        setReset((prevState) => true);
      }

    
    });
  }, []);

  return (
    <nav
      className="navbar"
      style={
        window.innerWidth <= 768
          ? {
              height: menu ? "300px" : "50px",
              backgroundColor: menuStateMobile || reset ? "black" : "white",
              boxShadow:
                menuStateMobile || reset ? "none" : "0px 0px 10px rgb(0,0,0,.2)",
              color: menuStateMobile || reset ? "white" : "black",
              position: menuStateMobile || reset ? "static" : "fixed",
              top: menuStateMobile || reset ? "-200px" : "0",
              
            }
          : {
            position:menuStatePC?"absolute":"fixed",
            backgroundColor:menuStatePC?"transparent":"white",
            width:"100%",
            boxShadow:menuStatePC?"none":"0px 0px 10px rgb(0,0,0,.2)",
            top:"0",
          }
      }
    >
      <div className="logo">AV</div>
      <div className="navbar-items">
        <Link className="tablink" activeClass="isActive" smooth spy to="home">
          <span className="nav-text">Home</span>
          <span className="nav-border"></span>
        </Link>

        <Link className="tablink" activeClass="isActive" smooth spy to="about">
          <span className="nav-text">About</span>
          <span className="nav-border"></span>
        </Link>

        <Link className="tablink" activeClass="isActive" smooth spy to="resume">
          <span className="nav-text">Resume</span>
          <span className="nav-border"></span>
        </Link>

        <Link
          className="tablink"
          activeClass="isActive"
          smooth
          spy
          to="projects"
        >
          <span className="nav-text">Projects</span>
          <span className="nav-border"></span>
        </Link>

        <Link
          className="tablink"
          activeClass="isActive"
          smooth
          spy
          to="contact"
        >
          <span className="nav-text">Contact</span>
          <span className="nav-border"></span>
        </Link>
      </div>
      <div>
        <a className="menu-button" onClick={toggleMenu}>
          <FaBars /> Menu
        </a>
      </div>
    </nav>
  );
}
