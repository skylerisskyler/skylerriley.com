import React from "react";

import "../App.css";

import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default () => (
  <div className="s">
    <NavBar />
    <Landing />
    <About />
    <Projects />
    {/* <div id={'contact'}  className="contact-b"  style={{backgroundColor: '', height: '100vh'}}>
      <Contact />
    </div> */}
  </div>
)
