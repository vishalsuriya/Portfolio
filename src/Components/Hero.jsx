import "./HeroStyle.css";
import React from 'react'
import {Link} from "react-router-dom";
import img from '../assets/bg-img.jpg';
function Hero ()  {
  return (
    <div className="hero">
<div className="mask">
<img className="into-img" src={img} alt="img" />
</div>
<div className="content">
  <p>HI, I'M VISHALSURIYA,</p>
  <h1>FullStack Developer</h1>
  <div>
    <Link to={"/Project"} className="btn">PROJECTS</Link>
    <Link to={"/Contact"} className="btn-light">CONTACT</Link>
  </div>
</div>

    </div>
  )
}

export default Hero