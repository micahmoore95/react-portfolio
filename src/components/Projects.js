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
    <a href={deployedLink} target='_blank'>{title}</a>
        <a href={githubLink}target='_blank'> Github</a>
</div>
    );
};

export default Project;