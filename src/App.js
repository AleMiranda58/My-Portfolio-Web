import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
