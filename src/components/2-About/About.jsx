import React from 'react'


export default function About() {
  return (
    <section id='about'><div className="about-left" data-aos="fade">
    <img className="profile" src="./profile.jpg" alt='Profile photo is currently unavailable'></img>
  </div>
  <div className="about-right" data-aos="fade">
    <div className="about-data">
    <h1 className="heading">About Me</h1>
      <div>
        <p>
          Hi!, My full name is Ashish Sunil Vaidya. I am 21 years old and I
          love coding.
        </p>
      </div>
      <div>
        <span className="about-head">Name:</span>{" "}
        <span className="about-desc">Ashish Vaidya</span>{" "}
      </div>
      <div>
        <span className="about-head">Date of Birth:</span>{" "}
        <span className="about-desc">January 27, 2003</span>{" "}
      </div>
      <div>
        <span className="about-head">Address:</span>{" "}
        <span className="about-desc">
          India, Maharashtra, Solapur -413001
        </span>{" "}
      </div>
      <a className="cv">Download CV</a>
    </div>
  </div></section>
  )
}
