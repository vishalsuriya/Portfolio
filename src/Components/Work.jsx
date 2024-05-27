import React  from 'react';
import '../Components/ProjectCardStyle.css';
import ProjectData from './WorkCardData';
import ProjectCard from './ProjectCard';
function Work(){
    return(
<div className='card-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
    {ProjectData.map((val,idx)=>{
        return(
<ProjectCard
  key = {idx}
  imgsrc = {val.imgsrc}
  title = {val.title}
  text = {val.text}
  view = {val.view}
  source = {val.source}
   />
        );
    })}
    </div>
</div>
    );
}
export default Work;