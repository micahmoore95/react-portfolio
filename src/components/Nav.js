import React from "react";

const Nav = (props) => {
  const {
    showMenu,
    setHomeSelected,
    setAboutSelected,
    setProjectSelected,
    setContactSelected,
    homeSelected,
    aboutSelected,
    projectSelected,
    contactSelected,
    toggleMenu
} = props
console.log(props);
const displayHome = () => {
    setHomeSelected(true);
    setAboutSelected(false);
    setProjectSelected(false);
    setContactSelected(false);
    toggleMenu();
};

const displayAbout = () => {
    setAboutSelected(true);
    setHomeSelected(false);
    setProjectSelected(false);
    setContactSelected(false);
    toggleMenu();
};

const displayProject = () => {
    setProjectSelected(true);
    setHomeSelected(false);
    setAboutSelected(false);
    setContactSelected(false);
    toggleMenu();
};

const displayContact = () => {
    setContactSelected(true);
    setHomeSelected(false);
    setAboutSelected(false);
    setProjectSelected(false);
    toggleMenu();
};
  return (
    <nav className={`menu ${showMenu && 'show'}`}>
            <div className={`menu-branding ${showMenu && 'show'}`}>
                <div className='portrait'></div>
            </div>
            <ul className={`nav-list ${showMenu && 'show'}`}>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${homeSelected && 'current'}`} 
                    onClick={() => displayHome()}
                    >
                        Home
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${aboutSelected && 'current'}`} 
                    onClick={() => displayAbout()}
                    >
                        About Me
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${projectSelected && 'current'}`}
                    onClick={() => displayProject()}
                    >
                        My Projects
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${contactSelected && 'current'}`}
                    onClick={() => displayContact()}
                    >
                        Contact Me
                    </p>
                </li>
            </ul>
        </nav>
  );
};

export default Nav;