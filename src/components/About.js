import React from "react";

const About = () => {
    return (
        <div id="about">
            <div>
              <h1 className="intro">
                Hello, my name is Micah.
                <br/>I am a beginner web developer excited to improve my skills!
               </h1>
              <p>
                A lttle bit about me:
              </p>
              <ul>
                <li>I am a husband and father</li>
                <li>I love to run and be active outside</li>
                <li>I have too many hobbies to count</li>
              </ul>
              <div>
                <a href="#contact">
                  Contact Me
                </a>
                <a href="#projects">
                  See My Past Work
                </a>
              </div>
            </div>
        </div>
      );
};

export default About();