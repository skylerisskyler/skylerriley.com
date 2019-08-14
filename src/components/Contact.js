import React from 'react';

import GithubIcon from '../../static/github-logo.png';
import MailIcon from '../../static/mail.png';
import LinkedInIcon from '../../static/linkedin-logo.png';

const Contact = () => (
  <div className="contact">
    <h1>Contact</h1>
    <div className="contact-icons">
      <a className="contact-icon"
        href="mailto:skyler@skylerriley.com"
      >
        <img src={MailIcon} />
        <p>Email</p>
      </a>
      <a className="contact-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rileyskyler"
      >
        <img src={GithubIcon} />
        <p>Github</p>
      </a>
      <a className="contact-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://linkedin.com/in/rileyskyler"
      >
        <img src={LinkedInIcon} />
        <p>LinkedIn</p>
      </a>
    </div>
  </div>
)

export default Contact;
