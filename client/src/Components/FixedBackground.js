import React from 'react';

// Styles
import "./fixedBackground.css";

// Images
import meintree from "../Images/meintree.jpg";

function FixedBackground() {

    return (
        <div style={{ backgroundImage: `url("${meintree}")` }} className="fixedBackground"></div>
    );
}

export default FixedBackground;