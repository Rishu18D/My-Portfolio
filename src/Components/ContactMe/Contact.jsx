import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Pagination from "../PaginationLinks";
import locationIcon from "../../../public/assets/Images/location.svg";
import emailIcon from "../../../public/assets/Images/email.svg";
import NavMobile from "../MobNev/NavMobile";

const Contact = () => {
  const nextPage = "/";
  const prevPage = "/projects";

  return (
    <>
      <Navbar />
      <div className="contact-page container">
        {/* Contact Details Section */}
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-detail">
            <img src={locationIcon} alt="Location Icon" className="contact-icon" />
            <span>India, Earth 🌍</span>
          </div>
          <div className="contact-detail">
            <img src={emailIcon} alt="Email Icon" className="contact-icon" />
            <a href="mailto:rishusinghmorals@gmail.com" className="contact-link">
              rishusinghmorals@gmail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://github.com/Rishu18D" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/rishu018" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <section id="contact-form" className="contact-form-section">
          <h2 className="section-title text-center">Send a Message</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/mjkbdrzw"
            method="POST"
            id="myForm"
          >
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-input"
                id="firstName"
                name="firstName"
                required
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-input"
                id="lastName"
                name="lastName"
                required
                placeholder="Enter your last name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-input"
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="form-group text-center">
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
          </form>
        </section>

        {/* Pagination Links */}
        <Pagination prevPage={prevPage} nextPage={nextPage} />
      </div>
      <NavMobile/>
    </>
  );
};

export default Contact;
