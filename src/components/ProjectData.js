import React from "react";
import Project from "./Projects";

const ProjectList = () => {
  const project1 = 
    {
      title: "Spoiled Milk",
      githubLink: "https://github.com/Nesnah1307/spoiled-milk",
      deployedLink: "https://dry-inlet-29870.herokuapp.com/",
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
      title: "Book Search",
      githubLink: "https://github.com/micahmoore95/book-search",
      deployedLink: "https://safe-reaches-44078.herokuapp.com/",
    };
    const project4 =
    {
      title: "Budget Tracker",
      githubLink: "https://github.com/micahmoore95/budget-tracker",
      deployedLink: "https://sleepy-mesa-97919.herokuapp.com/",
      projectImg: "budgettracker",
    };
    const project5 =
    {
      title: "Robot Gladiators",
      githubLink: "https://github.com/micahmoore95/robot-gladiators",
      deployedLink: "",
    };
    const project6 =
    {
      title: "Hike Buddy",
      githubLink: "https://github.com/micahmoore95/hike-buddy",
      deployedLink: "https://still-shore-87425.herokuapp.com/",
    };
  
  return (
    <div>
            <h1>My Projects</h1>
            <div>
                <Project project={project1} />
                <Project project={project2} />
                <Project project={project3} />
                <Project project={project4} />
                <Project project={project5} />
                <Project project={project6} />
            </div>
        </div>
    );
};

export default ProjectList;