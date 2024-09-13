import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Pagination from '../PaginationLinks.jsx';
import ProfileImage from "../../../public/assets/git_dp.jpg?url";
import Resume from "../../../public/assets/New_Updated_Resume.pdf";
import NavMobile from '../MobNev/NavMobile.jsx';

const Home = () => {

  const nextPage = "/about";
  const prevPage = "/";

  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="container-lg">
          <div className="row min-vh-80 align-items-center">
            <div className="col-md-5 text-center">
              <div className="home-img">
                <img
                  id="myProfileImage"
                  src={ProfileImage}
                  alt="Profile Dp"
                  className="rounded-circle img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="home-text">
                <h1 className="hello">Hello, I'm</h1>
                <h2 className="name">Rishu Singh</h2>
                <h3 className="title">Full-Stack Web Developer</h3>
                <p className="description">
                  Passionate web developer with expertise in modern technologies and a drive to create impactful solutions. Specializing in building dynamic, responsive web applications that offer exceptional user experiences.
                </p>
                <div className="social-icons">
                  <a href="https://github.com/Rishu18D" className="social-icon">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/rishu018" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="https://twitter.com" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.instagram.com" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
                <a
                  className="resumeBtn"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
      <NavMobile/>
    </div>
  );
}

export default Home;
