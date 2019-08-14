import React from 'react';
import { Link, animateScroll } from "react-scroll";
import ProfilePhoto from '../../static/profile.jpg';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar-links">
      <li
        id="nav-photo"
        className="navbar-item"
        onClick={() => animateScroll.scrollToTop()}
      >
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
          to="landing"
        >
          <img src={ProfilePhoto} />
        </Link>
      </li>
      {
        ['About', 'Projects', 'Contact'].map(i => (
          <li key={i} className="navbar-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              to={i.toLowerCase()}
              // className={`${i}-active`}
            >
              {i}
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default NavBar;
