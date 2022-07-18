import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import SkillsPage from './Pages/SkillsPage';
import BioPage from './Pages/BioPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';

// Components
import Navigation from './Components/Navigation';
import Header from './Components/Header';

// Styles
import "./global.css";
import ScrollToTop from './Components/ScrollToTop';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <ScrollToTop />
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