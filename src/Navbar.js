import React, { Component } from 'react';

import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import mail from './images/mail.png'
import twitter from './images/twitter.png'
import youtube from './images/youtube.png'
import github from './images/github.png'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="links">
          
          <div id="social-icon" >
            <a href="mailto:skyler@skylerriley.com">
              <img src={mail} alt="email"/>
            </a>
          </div>
          
          <div id="social-icon" >
            <a href="https://github.com">
              <img src={github} alt="github"/>
            </a>
          </div>

          <div id="social-icon" >
            <a
              href="https://www.linkedin.com/in/rileyskyler/"
              target="_newtab"
            >
              <img src={linkedin} alt="linkedin"/>
            </a>
          </div>
          
          <div id="social-icon" >
            <a
              href="https://twitter.com/rileyskyler"
              target="_newtab"
            >
              <img src={twitter} alt="twitter"/>
            </a>
          </div>
          
          <div id="social-icon" >
            <a
              href="https://instagram.com/rileyskyler"
              target="_newtab"
            >
              <img src={instagram} alt="instagram"/>
            </a>
          </div>
          
          <div id="social-icon" >
            <a
              href="https://www.youtube.com/channel/UCwolJSHt-sO-4GT07QbHrmw"
              target="_newtab"
            >
              <img src={youtube} alt="youtube"/>
            </a>
          </div>


        </div>
      </div>
    );
  }
}

export default Navbar;
