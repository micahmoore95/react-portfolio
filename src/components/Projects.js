import React from "react";

const Project = ({ project }) => {
  const {
    title,
    githubLink,
    deployedLink
  } = project;

  return (
    <div>
    <a href={deployedLink} target='_blank'>
    </a>
    <a href={deployedLink} target='_blank' className="deployed-link">{title}</a>
        <a href={githubLink}target='_blank' className="github-link"> Github Repository</a>
</div>
    );
}; 

export default Project;