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
import location from "../../../public/assets/Images/location.svg";
import email from "../../../public/assets/Images/email.svg";

const Contact = () => {
  const nextPage = "/";
  const prevPage = "/projects";

  return (
    <>
      <Navbar />
      <div
        className="mainDiv container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          color: "#000", // Black text color
        }}
      >
        <div
          className="innerSecDiv"
          style={{
            flex: 1,
            margin: "auto",
            fontSize: "20px",
            color: "#000", // Black text color
          }}
        >
          <h2 className="connectText">Connect with me</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              color: "#000", // Black text color
            }}
          >
            <img src={location} alt="Location" className="ContactImg" />
            <span>India, Earth 🌍</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              color: "#000", // Black text color
            }}
          >
            <img className="ContactImg" src={email} alt="Email" />
            <a
              href="mailto:rishusinghmorals@gmail.com"
              style={{ color: "#000", textDecoration: "none" }} // Black text color
            >
              rishusinghmorals@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="ContactIcon" />
            </a>
            <a href="https://github.com/Rishu18D" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="ContactIcon" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="ContactIcon" />
            </a>
            <a href="https://www.linkedin.com/in/rishu018" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="ContactIcon" />
            </a>
          </div>
        </div>
        <section id="contactMe" style={{ flex: 1, padding: "auto" }}>
          <div
            className="container goodlook justify-content-center"
            style={{
              margin: "auto",
              color: "#000", // Black text color
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <h2 className="text-center mb-4 fs-15 goodlook">Contact Me</h2>
            <form
              className="row g-3 goodlook"
              action="https://formspree.io/f/mleqwkjy"
              method="POST"
              id="myForm"
            >
              <div className="col-12">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  style={{ backgroundColor: "#f7f8fc", color: "#000" }} // Black text color
                />
              </div>
              <div className="col-12">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                  style={{ backgroundColor: "#f7f8fc", color: "#000" }} // Black text color
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  style={{ backgroundColor: "#f7f8fc", color: "#000" }} // Black text color
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  style={{ backgroundColor: "#f7f8fc", color: "#000" }} // Black text color
                />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ transition: "all 0.3s ease", color: "#fff" }} // White text color
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </>
  );
};

export default Contact;
