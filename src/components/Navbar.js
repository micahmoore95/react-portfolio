import React from "react";


function Navbar() {
    const { currentPage, setCurrentPage } = props;

  return (
    <header className="flex-row px-1">
      <h2>
          Micah Moore
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentPage("About")}>About Me</span>
          </li>
          <li className={currentPage === "myprojects" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentPage("MyProjects")}>Projects</span>
          </li>
      </ul>
    </nav>
    </header >
  );
};

export default Navbar();