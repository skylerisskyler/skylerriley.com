import React from "react"
import NavBar from "../components/Navbar";

export default () => (
  <div style={{backgroundColor: 'black', height: '300vh'}}>
    <NavBar />
    <div id={'landing'} style={{backgroundColor: 'cyan', height: '100vh'}}>Landing</div>
    <div id={'about'} style={{backgroundColor: 'blue', height: '100vh'}}>About</div>
    <div id={'projects'} style={{backgroundColor: 'red', height: '100vh'}}>Projects</div>
    <div id={'contact'} style={{backgroundColor: 'green', height: '100vh'}}>Contact</div>
  </div>
)
