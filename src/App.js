import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import './App.css'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
