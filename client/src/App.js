import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import SkillsPage from './Pages/SkillsPage';
import BioPage from './Pages/BioPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';

// Components
import FixedBackground from './Components/FixedBackground';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

// Styles
import "./global.css";
import ScrollToTop from './Components/ScrollToTop';

function App() {
  console.log("%cI am looking for work!", `
    display: block;
    font-family: system-ui;
    padding: 50px;
    color: white;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    font-size: 36px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%);
    border-radius: 36px;
    `);
  console.log("%cPlease send an email to:", `
    display: block;
    font-family: system-ui;
    padding: 10px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    background-color: black;
    `);
  console.log("%clucasmace4130@gmail.com", `
    display: block;
    font-family: system-ui;
    padding: 10px;
    color: blue;
    text-decoration: underline;
    font-size: 20px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    background-color: white; 
    `);
  console.log("%cI look forward to hearing from you.", `
    display: block;
    font-family: system-ui;
    padding: 14px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    background-color: black;
    `);
  console.log("%cThank you for visiting.", `
    display: block;
    font-family: system-ui;
    padding: 14px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    background-color: black;
    `);

  return (
    <Router>
      <ScrollToTop />
      <FixedBackground />
      <Header />
      <Navigation />

      <main id="mainContent" className="mainContent">

        <Switch>
          <Route path="/skills"><SkillsPage /></Route>
          <Route path="/resume"><ResumePage /></Route>
          <Route path="/projects"><ProjectsPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
          <Route path="/"><BioPage /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

// 