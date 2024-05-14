import React from 'react';
import './styles/Projects.css'; // Import your header styles

const Projects = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section id="projects">
        <h2 className="project-heading">Where Vision Meets Code</h2>
        <div className="card" onClick={() => openLink('https://vedantbhamare.notion.site/Machine-Learning-for-Road-Assets-and-Defects-ca2028b6f5254101be9129ea9b048028?pvs=4')}>
          <div className="inner">
            <h1>Machine Learning for Road Assets and Defects</h1>
            <p>
              Implemented object detection for road asset monitoring and defect
              detection on Indian roads, following NHAI guidelines. Enhanced road
              safety by automatically identifying and classifying assets while
              detecting defects like potholes and cracks.
            </p>
          </div>
          <div className="blob" />
          <div className="fakeblob" />
        </div>
        <div className="card" onClick={() => openLink('https://vedantbhamare.notion.site/Arogya-Diet-and-Yoga-Scheduler-f095df04dbd14a4e8d7b634d58ea1e98')}>
          <div className="inner">
            <h1>Arogya : Diet and Yoga Scheduler</h1>
            <p>
              This is the web-based Diet and Yoga Schedular which uses a machine
              learning model to generate diet and yoga plans using users BMI and BMR
              for accurate plans.
            </p>
          </div>
          <div className="blob" />
          <div className="fakeblob" />
        </div>
        <div className="card" onClick={() => openLink('https://vedantbhamare.notion.site/Spi-Game-b06a125eacd94bd29e41ce7ef6b61e99')}>
          <div className="inner">
            <h1>Spi Game</h1>
            <p>
              Spi is a multiplayer life simulation game where players navigate life
              processes to proliferate their species online. The game ends when a
              player exhausts energy or available space, promoting fair play with
              equal control for all.
            </p>
          </div>
          <div className="blob" />
          <div className="fakeblob" />
        </div>
        <div className="card" onClick={() => openLink('https://vedantbhamare.notion.site/AI-Virtual-Mouse-Using-Hand-Gesture-and-Voice-Assistant-6e6218fb0cd94bfda5a2a1fa4f7e3f63')}>
          <div className="inner">
            <h1>AI Virtual Mouse Using Hand Gesture and Voice Assistant</h1>
            <p>
              Explore the future of human-computer interaction with the AI Virtual
              Mouse. Effortlessly navigate your device using hand gestures and voice
              commands, revolutionizing productivity, accessibility, and security in
              a seamless integration across devices.
            </p>
          </div>
          <div className="blob" />
          <div className="fakeblob" />
        </div>
        <div className="card" onClick={() => openLink('https://vedantbhamare.notion.site/Effective-Graph-Library-1526b811095d49a7854863aef3b25075')}>
          <div className="inner">
            <h1>Effective Graph Library</h1>
            <p>
              It is an open-source graph library which includes different types of
              graph algorithms. This library was implemented in the c++ language.
            </p>
          </div>
          <div className="blob" />
          <div className="fakeblob" />
        </div>
      </section>
    </>
  );
}

export default Projects;
