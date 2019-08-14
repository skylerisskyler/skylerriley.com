import React from 'react';
import { Link, animateScroll } from "react-scroll";
import ProfilePhoto from '../../static/profile.jpg';

              // <li key={i}>
              //   <Link
              //     activeClass={i.toLowerCase()}
              //     spy={true}
              //     smooth={true}
              //     offset={0}
              //     duration= {500}
              //     to={i.toLowerCase()}
              //   >
              //     {i}
              //   </Link>
              // </li>

const NavBar = () => (
  <nav className="navbar">
    <a className="profile-photo">
      <img src={ProfilePhoto} />
    </a>
    <ul className="navbar-links">
      {
        ['About', 'Projects', 'Contact'].map(i => (
          <li key={i} className="navbar-item">
            <Link
              // activeClass={i.toLowerCase()}
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              to={i.toLowerCase()}
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
