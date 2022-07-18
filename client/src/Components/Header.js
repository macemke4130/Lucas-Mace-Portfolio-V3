import React from 'react';

// Styles
import "./header.css";

function Header() {

    return (
        <header className="headerContainer">
            <div className="textContainer">
                <h1 className="myName">Lucas Mace</h1>
                <h2 className="myTitle">Full Stack Web Developer</h2>
            </div>

        </header>
    );
}

export default Header;