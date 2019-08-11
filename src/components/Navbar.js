import React from 'react';
import { Link, animateScroll } from "react-scroll";

const NavBar = () => (
  <div className='navbar'>
    <ul>
      <li>
        <button onClick={() => animateScroll.scrollToTop()}>TOP</button>
      </li>
      {
        ['About', 'Projects', 'Contact'].map(i => {
          return (
            <li key={i}>
              <Link
                activeClass={i.toLowerCase()}
                spy={true}
                smooth={true}
                offset={0}
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
)

export default NavBar;
