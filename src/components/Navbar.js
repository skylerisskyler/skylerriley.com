import React from 'react';

import { Link } from "react-scroll";
import "../App.css";

const NavBar = () => (
  <>
    <div className='navbar'>
      <ul>
        {
          ['Landing', 'About', 'Projects', 'Contact'].map(i => {
            return (
              <li key={i}>
                <Link
                  activeClass={i.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  to={i.toLowerCase()}
                >
                  {i}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  </>
)

export default NavBar;
