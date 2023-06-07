import React from 'react';

// Styles
import "./resumePage.css"

function ResumePage() {

    return (
        <div className="pageContainer">
            <div className="pageWrapper">
                <div className="faceSpacer"></div>
                <div className="pageContent">
                    <div className="purpleCard">
                        <h3 className="pageTitle">Resume</h3>
                    </div>
                    <a href="./2022-lucas-mace-web-dev-resume.pdf" download="lucas-mace-web-dev-resume.pdf" className="downloadResume">Download PDF</a>
                    <div className="purpleCard">
                        <h4 className="resumeTitle">Skills</h4>
                        <p>React, GraphQL, TypeScript, JavaScript, Next JS, UX/UI, MySQL, Node JS, Express JS, VTEX, JSON, JQuery, REST, HTML5, CSS3, Styled Components, SPAs, GitHub, Salesforce / Heroku, Adobe Suite</p>
                    </div>
                    <div className="purpleCard">
                        <h4 className="resumeTitle">Experience</h4>
                        <div className="jobContainer">
                            <p className="employer">Erik's Bike Shop</p>
                            <p className="jobTitle">Lead Front End Web, React and UX/UI Developer</p>
                            <p className="jobDates">November 2021 - Present / Minneapolis, MN</p>
                            <p className="jobDesc">Design, testing and implementation of all aspects of our websites while focusing on page speed, SEO and accessibility. Create custom React components to fit our unique needs. Create internal tools to increase productivity. Use creative CSS skills to bring beauty to the websites. Launch new standalone brand websites. Design and implement new webpage features. UX/UI management.</p>
                        </div>
                        <div className="jobContainer">
                            <p className="employer">The Rave / Eagles Club</p>
                            <p className="jobTitle">Assistant Website Administrator</p>
                            <p className="jobDates">March 2010 - April 2012 / Milwaukee, WI</p>
                            <p className="jobDesc">Website management and development. Photographing and filming music videos, artist interviews, private musical sessions, and live concerts. E-Commerce maintenance. Print and animated graphic creation. Copywriting. Technical direction and vision mixing of live webcasts.</p>
                        </div>
                        <div className="jobContainer">
                            <p className="employer">Vision Production</p>
                            <p className="jobTitle">Web and Game Developer, Graphic Designer</p>
                            <p className="jobDates">October 2005 - April 2009 / Pontiac, MI</p>
                            <p className="jobDesc">Web and Game development. E-Commerce integration. Online sales training module creation. Touch screen kiosk development. Email newsletter deployment. Print media creation. Video post production and graphic animation. On site event production and graphic director.</p>
                        </div>
                        <div className="jobContainer">
                            <p className="employer">The Hub Bicycle Co-Op</p>
                            <p className="jobTitle">Service Manager and Head Mechanic</p>
                            <p className="jobDates">March 2016 - August 2018 / Minneapolis, MN</p>
                            <p className="jobDesc">Management of service mechanic team of 30+, quality control of bicycles, maintaining service department tools and budget, setting worker schedules and maintaining labor budget, inventory control, service writing and repair, maintaining and updating service policies and procedures, writing and leading training sessions for workers, hiring, Steering Committee member.</p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <h4 className="resumeTitle">Education</h4>
                        <div className="schoolContainer">
                            <p className="jobTitle">Covalence.io Bootcamp</p>
                            <p className="employer">Full Stack Development Graduate</p>
                            <p className="jobDates">October 2020 - March 2021</p>
                        </div>
                        <div className="schoolContainer">
                            <p className="jobTitle">Oakland Schools Technical Campus - SouthWest</p>
                            <p className="employer">Visual Imaging and Computer Programming Graduate</p>
                            <p className="jobDates">2005 - 2006</p>
                        </div>
                    </div>
                    <div className="purpleCard">
                        <h4 className="resumeTitle">References</h4>
                        <div className="schoolContainer">
                            <p className="jobTitle">Brennan Kreiman</p>
                            <p className="employer">Customer Solutions Engineer at Stripe</p>
                            <p className="jobDates"><a href="mailto:brennank@stripe.com">brennank@stripe.com</a></p>
                        </div>
                        <div className="schoolContainer">
                            <p className="jobTitle">Luke Przekwas</p>
                            <p className="employer">Instructor at Covalence</p>
                            <p className="jobDates"><a href="mailto:luke@covalence.io">luke@covalence.io</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;