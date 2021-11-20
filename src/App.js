import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
// import Intro from './components/Intro/Intro';
// import Projects from './components/Projects/Projects';
// import Contact from './components/contact/Contact';
import './App.css'
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
      {/* <Intro /> */}
      {/* <Projects />
      <Contact /> */}
    </Router>
  );
}

export default App;
