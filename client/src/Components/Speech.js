import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import "./speech.css";

function Speech(props) {
    const [openGate, setOpenGate] = useState(true);
    const [speechAvailable, setSpeechAvailable] = useState(false);
    const [showSpeechButton, setShowSpeechButton] = useState(false);
    const [useSpeech, setUseSpeech] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


    useEffect(() => {
        if (!SpeechRecognition) return;
        setSpeechAvailable(true);
        setShowSpeechButton(openGate ? true : false);
    })


    useEffect(() => {
        if (!useSpeech) return;
        if (!openGate) return;
        setOpenGate(false);
        setShowSpeechButton(false);

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener("result", e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("");

            const bioNav = transcript.includes("go to biography");
            const skillsNav = transcript.includes("go to skills");
            const projectsNav = transcript.includes("go to projects");
            const resumeNav = transcript.includes("go to resume");
            const contactNav = transcript.includes("go to contact");

            if (bioNav) history.push("/");
            if (skillsNav) history.push("/skills");
            if (projectsNav) history.push("/projects");
            if (resumeNav) history.push("/resume");
            if (contactNav) history.push("/contact");
        })

        recognition.addEventListener("end", recognition.start);
        recognition.start();

        return () => {
            recognition.removeEventListener("result", {});
            recognition.removeEventListener("end", {});
        }
    })

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowSpeechButton(false);
        setUseSpeech(useSpeech ? false : true);
        setShowModal(false);
    }

    if (speechAvailable) {
        return (
            <>
                {showSpeechButton && <div onClick={handleShowModal} className="speech-button">Speech<br></br>Navigation</div>}
                {showModal &&
                    <div className="speech-modal-overlay">
                        <div className="speech-modal-wrapper">
                            <p>After giving your microphone permission, try saying: "Go to projects" <span className="no-wrap">or "Go to resume".</span></p>
                            <p>This is a Beta feature and won't work in all browsers.</p>
                            <button onClick={handleCloseModal}>Okay</button>
                        </div>
                    </div>
                }
            </>
        );
    } else {
        return <></>
    }
}

export default Speech;