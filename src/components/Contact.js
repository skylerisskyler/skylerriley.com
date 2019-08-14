import React from 'react';

import GithubIcon from '../../static/github-logo.png';
import MailIcon from '../../static/mail.png';
import LinkedInIcon from '../../static/linkedin-logo.png';

const Contact = () => (
  <div className="contact">
    <h1>Contact</h1>
    <div className="contact-icons">
      <a className="contact-icon">
        <img src={MailIcon} />
        <p>Email</p>
      </a>
      <a className="contact-icon">
        <img src={GithubIcon} />
        <p>Github</p>
      </a>
      <a className="contact-icon">
        <img src={LinkedInIcon} />
        <p>Github</p>
      </a>
    </div>
  </div>
)

export default Contact;
