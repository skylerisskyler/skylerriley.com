import React from "react";

import "../App.css";

import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default () => (
  <div className="s" style={{backgroundColor: '', height: '300vh'}}>
    <NavBar />
    <div id={'landing'} className="landing-b" style={{height: '100vh'}}>
      <Landing />
    </div>
    <div id={'about'} className="about-b"  style={{backgroundColor: '', height: '100vh'}}>
      <About />
    </div>
    <div id={'projects'}  className="projects-b"  style={{backgroundColor: '', height: '100vh'}}>
      <Projects />
    </div>
    <div id={'contact'}  className="contact-b"  style={{backgroundColor: '', height: '100vh'}}>
      <Contact />
    </div>
  </div>
)
