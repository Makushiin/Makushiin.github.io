import "./ContactMe.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9fucfi8",
        "template_vkliz5f",
        form.current,
        "X15q5R9ApVbqRK8ty"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2>Get in Touch</h2>
              <h3>
                I'm open to new opportunities. Looking to work together or
                questions? Send me an email!
              </h3>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input type="text" name="user_name" />
            <label>Email:</label>
            <input type="email" name="user_email" />
            <label>Message:</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          <ul className="wrapper">
            <Link
              to="https://www.linkedin.com/in/maxine-rose-mayor-50032b1ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="LI-link"
            >
              <li className="icon linkedin">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#362456" }}
                />
              </li>
            </Link>

            <Link
              to="https://github.com/Makushiin"
              target="_blank"
              rel="noopener noreferrer"
              className="GH-link"
            >
              <li className="icon github">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#362456" }} />
              </li>
            </Link>

            <Link
              to="https://www.instagram.com/makushiiin/"
              target="_blank"
              rel="noopener noreferrer"
              className="IG-link"
            >
              <li className="icon instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#362456" }}
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
