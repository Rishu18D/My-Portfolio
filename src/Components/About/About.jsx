import React from 'react';
import "./About.css";
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Pagination from '../PaginationLinks';
import NavMobile from '../MobNev/NavMobile';

const About = () => {
  const nextPage = "/skills";
  const prevPage = "/";

  return (
    <>
      <Navbar />
      <div>
        <section id="aboutNew" className="min-vh-100 aboutContainer">
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="about-img text-center">
                  <img 
                    src="https://img.freepik.com/premium-vector/flat-illustration-creative-boy-with-smiling-face_507991-59.jpg" 
                    alt="Your Photo" 
                    className="rounded-circle img-fluid" 
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="about-text">
                  <h2 className="aboutme"><span>A</span>bout <span>M</span>e</h2>
                  <p className="AboutText">
                    I am a passionate full-stack web developer with hands-on experience in building dynamic and responsive web applications. I have a solid foundation in core technologies like HTML, CSS, and JavaScript, and I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack to create full-stack applications that are both efficient and scalable.
                  </p>
                </div>
                <div className="social-icons">
                  <a href="https://github.com/Rishu18D" className="hoverEffect">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/rishu018" className="hoverEffect">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="https://twitter.com/" className="hoverEffect">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.instagram.com/" className="hoverEffect">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="eduSec" className="min-vh-80" style={{ marginTop: "50px", padding: "40px", marginBottom: "40px", backgroundColor: "#ddd" }}>
          <div className="text-center" style={{ color: "#000", fontSize: "70px", marginBottom: "20px" }}>
            <div id="EducationText">Education</div>
          </div>
          <div className="container" id="profile-container">
            <div id="education-card">
              <img 
                id="avatar" 
                src="https://fastly.4sqi.net/img/general/600x600/92797040_CfVJESvLUL7KGhKfBlbcy50thG7NYrmDZg-9xN3pyNc.jpg" 
                alt="avatar" 
                style={{ objectFit: "contain", backgroundColor: "#eee" }} 
              />
              <div id="info">
                <h5 id="name">Babu Banarasi Das University (2021-2024)</h5>
                <p id="activity">Bachelor of Computer Applications-DS&AI</p>
                <p className="tagline">Average CGPA: 7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} />
      <NavMobile/>
    </>
  );
};

export default About;
