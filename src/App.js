import React from 'react';
import './App.css';

// Import your custom components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Blogs from './components/Blogs';
import Motto from './components/Motto';
import Photography from './components/Photography';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <Blogs />
      <Motto />
      <Photography />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
