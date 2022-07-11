import React, { useState } from 'react';
import Nav from './Nav';

const Header = (props) => {
    const {
        setHomeSelected, 
        setAboutSelected,
        setProjectSelected,
        setContactSelected, 
        homeSelected, 
        aboutSelected,
        projectSelected,
        contactSelected
    } = props;

    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='App-header'>
            <div className={`menu-btn ${showMenu && 'close'}`} onClick={() => toggleMenu()}>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
            </div>
            <Nav 
            showMenu={showMenu} 
            setHomeSelected={setHomeSelected} 
            setAboutSelected={setAboutSelected}
            setProjectSelected={setProjectSelected}
            setContactSelected={setContactSelected} 
            homeSelected={homeSelected} 
            aboutSelected={aboutSelected}
            projectSelected={projectSelected}
            contactSelected={contactSelected}
            toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;