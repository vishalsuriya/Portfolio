import React  from 'react';
import '../Components/ProjectCardStyle.css';
function ProjectCard(props){
    return(
        <div className='project-card'>
        <img src={props.imgsrc} alt='image' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btn'>
            <a href={props.view} className='btn'>view</a>
            <a href={props.source} className='btn'>Source</a>
            </div>
        </div>
        </div>
    );
}
export default ProjectCard;