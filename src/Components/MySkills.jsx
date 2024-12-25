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
        <li><h3>REACT-NATIVE
        </h3>
        <span className="bar"><span className="native"></span></span>
        </li>
        <li><h3>CSS</h3>
        <span className="bar"><span className="css"></span></span>
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
        <li><h3>POSTGRESQL</h3>
        <span className="bar"><span className="postgres"></span></span>
        </li>
    </div>
    </div>
   )
}
export default MySkills;
