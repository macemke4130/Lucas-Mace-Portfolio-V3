import React from 'react';

// Styles
import "./projectsPage.css"

// Images
import ntp from "../Images/ntp.jpg";
import dt from "../Images/dt.jpg";
import dn from "../Images/dn.jpg";
import tcsi from "../Images/tcsi.jpg";
import wsg from "../Images/wsg.jpg";
import cbp from "../Images/cbp.jpg";
import gpd from "../Images/gpd.jpg";
import ghr from "../Images/ghr.jpg";

function ProjectsPage() {

    return (
        <div className="pageContainer">
            <div className="pageWrapper">
                <div className="faceSpacer"></div>
                <div className="pageContent">
                    <div className="purpleCard">
                        <h3 className="pageTitle">Projects</h3>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Name That Part</h4>
                            <img className="projectImage" alt="Preview of Name That Part Website." loading="lazy" src={ntp} />
                            <p className="projectReview">"Name That Part is a fun, and surprisingly tough game." - <a href="https://bikerumor.com/think-youre-a-knowledgeable-bike-mechanic-prove-it-with-name-that-part-game/" target="_blank" rel="noreferrer">BikeRumor</a></p>
                            <p className="projectReview">"Challenging." - <a href="https://theradavist.com/2022/03/radar-roundup-reeb-full-suspension-sustainable-cambium-giro-flat-latch-engin-cranks-and-colored-xc-iii/" target="_blank" rel="noreferrer">The Radavist</a></p>
                            <p className="projectReview">"This one is pure sadism." - <a href="https://www.pinkbike.com/news/slack-randoms-moto-inspired-hooligan-ebike-fixed-gear-skateboard-bikes-jet-engine-go-karts-and-more.html" target="_blank" rel="noreferrer">PinkBike</a></p>
                            <p className="projectDesc">A game designed for bicycle nerds, by a bicycle nerd. Users are shown a small bicycle part and 4 options to choose from. Images are loaded in advance on each selection to keep the game play inturrupted. Stats are collected at the end of each game and sent to the database.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">React, GraphQL, Express, MySQL, Styled Components, React Router</p>
                            <p className="projectLink"><a href="http://www.namethatpart.com/" target="_blank" rel="noreferrer">Live Project</a></p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Bicycle-Mechanic-Game-v3" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Dynamic Comparison Table Component</h4>
                            <img className="projectImage" alt="Preview of Dynamic Comparison Table Component." loading="lazy" src={dt} />
                            <p className="projectDesc">A scaling and dynamically loaded HTML table. JSON data is fed in, a fully dynamic comparison table is displayed. Controlled by a single prop object. Columns and Rows highlight to the table cell that is moused over.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">React</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Dynamic-React-Table-Component" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Dynamic Navigation</h4>
                            <img className="projectImage" alt="Preview of Dynamic Navigation Component." loading="lazy" src={dn} />
                            <p className="projectDesc">A scaling and self routing navigation menu. JSON data is fed in, a fully dynamic navigation is displayed, complete with submenus.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">React, React Router</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Navigation-Menu" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Twin Cities Send It</h4>
                            <img className="projectImage" alt="Preview of Twin Cities Send It Website." loading="lazy" src={tcsi} />
                            <p className="projectDesc">Database of all grass hills in the Twin Cities and greater surrounding areas that are suitable to ride your bicycle down. Why? Because it's really fun. I built this project to familiarize myself with GraphQL. Complete with photos, videos and maps to each hill, this has become a favorite passion project of mine.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">Vanilla JS, GraphQL, Express, MySQL</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Twin-Cities-Send-It" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">What's Still Good?</h4>
                            <img className="projectImage" alt="Preview of What's Still Good Web App" loading="lazy" src={wsg} />
                            <p className="projectDesc">Full Stack Application for personal use listing the expiration dates of all the food in my kitchen so I may better plan my meals and reduce food waste.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">React, GraphQL, Express, MySQL, Day.js</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/whats-good" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Coffee Brewing Profile App</h4>
                            <img className="projectImage" alt="Preview of Coffee Brewing Profile Web App." loading="lazy" src={cbp} />
                            <p className="projectDesc">Proof of concept tool to help at home baristas to keep track of and maintain their coffee brewing techniques. Choose your preferred brewing method and the app frontloads your previous brew into the input fields to cut down on redundancies. I use this app almost every day. Feel free to sign up!</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">React JS, TypeScript, Express, Passport, BCrypt, MySQL, WebPack, React Router</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Coffee-Brew-Profiler" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">Grams Per Dollar Calculator App</h4>
                            <img className="projectImage" alt="Preview of Grams Per Dollar Calculator Web App." loading="lazy" src={gpd} />
                            <p className="projectDesc">Sometimes deciding to upgrade your bike can be a difficult decision. This calculator will give you the dollars per gram (or ounces) for a supplied component upgrade.</p>
                            <p className="techStackTitle">Tech Stack</p>
                            <p className="techStack">Vanilla JS, Express</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130/Grams-Per-Dollar" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <div className="projectContainer">
                            <h4 className="projectTitle">GitHub</h4>
                            <img className="projectImage" alt="Github Logo" loading="lazy" src={ghr} />
                            <p className="projectDesc">My GitHub Profile. Poke around if you'd like.</p>
                            <p className="projectLink"><a href="https://github.com/macemke4130?tab=repositories" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;