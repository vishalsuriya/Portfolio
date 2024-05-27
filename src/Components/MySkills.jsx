import React from "react";
import "../Components/MySkillsStyle.css";
function MySkills(){
   return(
    <div>
    <div className="skill">
    <h1>My Skills</h1>
        <li><h3>JAVA</h3>
        <span className="bar"><span className="java"></span></span>
        </li>
        <li><h3>DATA STRUCTURES AND ALGORITHMS</h3>
        <span className="bar"><span className="dsa"></span></span>
        </li>
        <li><h3>HTML</h3>
        <span className="bar"><span className="html"></span></span>
        </li>
        <li><h3>CSS</h3>
        <span className="bar"><span className="css"></span></span>
        </li>
        <li><h3>JAVASCRIPT</h3>
        <span className="bar"><span className="javascript"></span></span>
        </li>
        <li><h3>REACTJS</h3>
        <span className="bar"><span className="react"></span></span>
        </li>
        <li><h3>NODEJS</h3>
        <span className="bar"><span className="nodejs"></span></span>
        </li>
        <li><h3>EXPRESSJS</h3>
        <span className="bar"><span className="expressjs"></span></span>
        </li>
        <li><h3>MONGODB</h3>
        <span className="bar"><span className="mongodb"></span></span>
        </li>
    </div>
    </div>
   )
}
export default MySkills;
