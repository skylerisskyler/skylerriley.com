import React from "react";
import Helmet from "react-helmet"

import "../App.css";

import NavBar from "../components/Navbar";
import Landing from "../components/Landing";
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default () => (
  <div className="s">
    <Helmet>
      <title>Skyler Riley | Web Developer</title>
    </Helmet>
    <NavBar />
    <Landing />
    <About />
    <Projects />
    <Contact />
  </div>
)
