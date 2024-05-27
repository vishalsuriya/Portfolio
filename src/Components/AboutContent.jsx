import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import ph1 from "../assets/photo.jpg";
function AboutContent ()  {
  return (
    <div className="about">
<div className="left">
<h1>Who Am I?</h1>
<p>Hello, I'm Vishal Suriya, a passionate individual from Namakkal currently pursuing my Bachelor's in Electrical and Electronics Engineering (EEE) at Karpagam College of Engineering. While my academic focus lies in electrical systems and engineering principles, my true passion lies in software development. </p>
<Link to="/Contact">
    <button className="btn">Contact</button>
</Link>
</div>
<div className="right">
    <div className="img-container">
        <img src={ph1} className="img"></img>
    </div>
</div>
    </div>
  );
}

export default AboutContent;