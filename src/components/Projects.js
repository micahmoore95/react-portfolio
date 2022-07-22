import React from "react";

const Project = ({ project }) => {
  const {
    title,
    githubLink,
    deployedLink,
    projectImg
  } = project;

  return (
    <div>
    <a href={deployedLink} target='_blank'>
    <img src={`/assets/images/${projectImg}.jpg`} alt='' className='project-img' />
    </a>
    <a href={deployedLink} target='_blank' className="deployed-link">{title}</a>
    <a href={githubLink}target='_blank' className="github-link"> Github Repository</a>
</div>
    );
}; 

export default Project;