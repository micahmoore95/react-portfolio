import React from "react";
import Project from "./Projects";

const ProjectList = () => {
  const project1 = 
    {
      title: "Spoiled Milk",
      githubLink: "https://micahmoore95.github.io/react-portfolio/",
      deployedLink: "",
      projectImg: "spoiledmilk",
    };
  const project2 =
    {
      title: "Try My Trivia",
      githubLink: "https://github.com/micahmoore95/TryMyTrivia",
      deployedLink: "https://micahmoore95.github.io/TryMyTrivia/",
      projectImg: "trymytrivia",
    }
  const project3 =
    {
      title: "Try My Trivia",
      githubLink: "https://micahmoore95.github.io/TryMyTrivia/",
      deployedLink: "",
    };
  
  return (
    <div>
            <h1>My Projects</h1>
            <div>
                <Project project={project1} />
                <Project project={project2} />
                <Project project={project3} />
            </div>
        </div>
    );
};

export default ProjectList;