import React from 'react';

// Styles
import "./contactPage.css"

function ContactPage() {

    return (
        <div className="pageContainer">
            <div className="pageWrapper">
                <div className="faceSpacer"></div>
                <div className="pageContent">
                    <div className="purpleCard">
                        <h3 className="pageTitle">Contact</h3>
                        <p><a href="mailto:lucasmace4130@gmail.com">lucasmace4130@gmail.com</a></p>
                        <p><a href="https://www.linkedin.com/in/lucas-mace-7857b1103/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p><a href="https://www.instagram.com/lucasmacephoto/" target="_blank" rel="noreferrer">Instagram</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;