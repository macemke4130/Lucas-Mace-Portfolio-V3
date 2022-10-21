import React from 'react';

// Styles
import "./bioPage.css"

function BioPage() {

    return (
        <div className="pageContainer">
            <div className="pageWrapper">
                <div className="faceSpacer"></div>
                <div className="pageContent">
                    <div className="purpleCard">
                        <h3 className="pageTitle">Biography</h3>
                        <p>Hello! My name is Lucas.</p>
                        <p>I have over 6 years of professional front end development experience. I am a Full Stack Web Developer with an expanding focus on SEO, Accessibility and Reusable code.</p>
                        <p>I currently work as the Lead Front End Web, React and UX/UI Developer for <a href="https://www.eriksbikeshop.com/" rel="noreferrer" target="_blank">Erik's Bike Shop</a>, one of the largest bicycle and Winter sports shops in America.</p>
                        <p>My favorite tech stack currently is React, GraphQL, Express and MySQL. If you're a bicycle nerd, you may enjoy my <a href="http://www.namethatpart.com/" rel="noreferrer" target="_blank">Name That Part</a> game that utilizes those technologies.</p>
                        <p>In my free time, I enjoy fixing bicycles, but they're much more fun to ride. I also love coffee, hiking, camping, skateboarding, photography, live music and reading science fiction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BioPage;