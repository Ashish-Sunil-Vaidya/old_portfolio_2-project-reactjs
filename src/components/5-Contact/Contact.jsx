import React from "react";
import contactsData from "./data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init();
  });
  const condatarr = contactsData.map((item, index) => {
    return (
      <div
        data-aos="fade-left"
        data-aos-delay={index * 300}
        className="con-container"
        key={item.id}
      >
        <div className="con-front">
          {/* <div className="con-icon">{item.icon}</div> */}
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
        <div className="floater">
          <p>{item.question}</p>
          <a href={item.action} style={item.button_css}>
            {/* {item.link_icon} */}
            {item.button_text}
          </a>
        </div>
      </div>
    );
  });
  return (
    <section id="m5" className="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-cards">{condatarr}</div>
      <div className="feedback-form" data-aos="fade-left" data-aos-delay="500">
        <img className="show-piece" src="./showpiece.jpg"></img>

        <form className="con-form" action="#">
          <div>
            <h1 className="heading">FeedBack</h1>
          </div>
          <div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
