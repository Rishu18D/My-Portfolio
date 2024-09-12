import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Projects.css";
import Pagination from '../PaginationLinks';
import portfolio from "../../../public/assets/Images/my-Portfolio.png?url";
import PhotoGallery from "../../../public/assets/Images/abc.png?url";
import Ecom from "../../../public/assets/Images/bbb.png?url";

const Projects = () => {
  const nextPage = "/contact";
  const prevPage = "/skills";

  return (
    <div>
      <Navbar />
      <section className="projectcontainer" id="projectSection">
        <h1 id="projectHead">Projects</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Project 1: My Portfolio */}
          <div className="col">
            <div className="card">
              <img src={portfolio} className="card-img-top" alt="Portfolio Image" />
              <div className="card-body">
                <h5 className="card-title">My Portfolio</h5>
                <p className="card-text">Tech used: React Js<br /> CSS framework: Bootstrap</p>
                <p className="card-text">A Portfolio Website, where you get to know more about me.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/Rishu18D/My-Portfolio-" className="btn btn-primary">Code</a>
                  <a href="https://my-portfolio-10.vercel.app/" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Photo Gallery Website */}
          <div className="col">
            <div className="card">
              <img src={PhotoGallery} className="card-img-top" alt="Photo Gallery Website Image" />
              <div className="card-body">
                <h5 className="card-title">Photo Gallery Website</h5>
                <p className="card-text">Tech used: MERN Stack</p>
                <p className="card-text">A simple photo gallery website for uploading and viewing photos.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/Rishu18D/Photo_gallery" className="btn btn-primary">Code</a>
                  <a href="https://photo-gallery-frontend-1840.onrender.com" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: E-commerce Website */}
          <div className="col">
            <div className="card">
              <img src={Ecom} className="card-img-top" alt="E-commerce Website Image" />
              <div className="card-body">
                <h5 className="card-title">E-commerce Website</h5>
                <p className="card-text">Tech used: EJS (SSR) + MongoDB</p>
                <p className="card-text">A full-fledged e-commerce platform with server-side rendering for optimized performance.</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/Rishu18D/E-commerce_SSR" className="btn btn-primary">Code</a>
                  <a href="https://e-commerce-ssr-1.onrender.com" className="btn btn-secondary">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

export default Projects;
