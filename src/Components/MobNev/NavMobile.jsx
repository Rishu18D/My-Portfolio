import React from 'react';
import './NavMobile.css';
import { Link } from 'react-router-dom';

const NavMobile = () => {
  return (
    <div className="nav-mobile">
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
