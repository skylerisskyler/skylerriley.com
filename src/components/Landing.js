import React from 'react';
import ProfilePhoto from '../../static/profile.jpg';

const Landing = () => (
  <div className="landing">
    <div className="landing-background">
      <div className="landing-main">
        <img src={ProfilePhoto} />
        <div className="landing-title">
          <h1>Skyler Riley</h1>
          <br></br>
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;