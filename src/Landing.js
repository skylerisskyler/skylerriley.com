import React, { Component } from 'react';

import profile_photo from '../src/profile_photo.jpg'

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="jumbotron">

            <div className="name">Skyler Riley</div>

            <div className="photo">
                <img src={profile_photo} alt="Skyler Riley"/>
            </div>

            <div className="details">
                <div className="detail">Web</div>                   
                <div className="barrier"></div>
                
                <div className="detail">Blockchain</div>
            </div>
    
            <div className="name">Developer</div>

        </div>
      </div>
    );
  }
}

export default Landing;
