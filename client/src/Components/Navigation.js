import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// Styles
import "./navigation.css";

// Hooks
import useOnClickOutside from '../utils/useClickOutside';

function Navigation(props) {
    const navDrawer = useRef();
    const hamburgerRef = useRef();

    useOnClickOutside(navDrawer, () => {
        if (navDrawer.current.classList.contains("openNav")) toggleNav();
    });

    const toggleNav = () => {
        navDrawer.current.classList.toggle("openNav");
    }

    return (
        <>
            <div className="hamburgerContainer">
                <button onClick={toggleNav} ref={hamburgerRef} aria-label="Open Navigation" className="hamburgerButton">
                    <div className="hamburgerWrapper">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </button>
            </div>

            <div ref={navDrawer} className="navContainer">
                <nav>
                    <ul className="navList">
                        <li><Link to="/">Bio</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <button onClick={toggleNav} className="closeNavButton">Close Navigation</button>
            </div>
        </>
    );
}

export default Navigation;