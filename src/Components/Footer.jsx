import "./FooterStyle.css";
import React from 'react'
import {FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
function Footer()  {
  return (
    <div className="Footer" >
        <div className="footer-container">
          <div className="left">
          <div className="location">
            <p><FaHome size={20} style={{color:"white" ,marginRight:"2rem"}}/> 1/83,Tiruchengode,Namakkal </p>
            </div> 
            <div className="phone">
          <h4><FaPhone size={20} style={{color:"white" ,marginRight:"2rem"}}/>9344360916</h4>
            </div>
            <div className="email">
          <h4><FaMailBulk size={20} style={{color:"white" ,marginRight:"2rem"}}/>vishalsuriya2003@gmail.com</h4>
            </div>
            </div> 
        <div className="right">
          <h4>About Me</h4>
          <p>Iam vishalsuriya a FullStack Developer</p>
          <div className="social">
        <a href="https://github.com/vishalsuriya"><h4><FaGithub size={30} style={{color:"white" ,marginRight:"1rem"}}/></h4></a> 
         <a href="https://www.linkedin.com/in/vishalsuriya-ng-33153b260/" ><h4><FaLinkedin size={30} style={{color:"white" ,marginRight:"1rem"}}/></h4></a>
         <a href="" ><h4><GrInstagram size={30} style={{color:"white" ,marginRight:"1rem"}}/></h4></a>
            </div>
          </div>
        </div>
        </div>  )

  }
export default Footer;