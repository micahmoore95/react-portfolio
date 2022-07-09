import React from "react";
import Project from "./Projects";

const projectList = () => {
  const project1 = 
    {
      title: "Spoiled Milk",
      githubLink: "https://micahmoore95.github.io/react-portfolio/",
      deployedLink: "",
    };
  const project2 =
    {
      title: "Try My Trivia",
      githubLink: "https://micahmoore95.github.io/TryMyTrivia/",
      deployedLink: "",
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