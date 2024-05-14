import React, { useEffect } from 'react';
import './styles/Header.css'; // Import your header styles
import Navbar from './Navbar';

const Header = () => {
  useEffect(() => {
    // Function to handle smooth scrolling to the about section
    const scrollToAbout = (e) => {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    };

    // Add event listener to the arrow icon on component mount
    const scrollArrow = document.getElementById("scroll-arrow");
    scrollArrow.addEventListener("click", scrollToAbout);

    // Cleanup: Remove event listener on component unmount
    return () => {
      scrollArrow.removeEventListener("click", scrollToAbout);
    };
  }, []); // Empty dependency array to run the effect only once

  // Render the header component
  return (
    <>
      <div className="container-header demo">
      <div className="content">
    <div id="large-headerx" className="large-header">
      <canvas id="demo-canvas" />
      <h1 className="main-title">
        VEDANT BHAMARE
        <span className="thin">
          <Navbar/>
        </span>
      </h1>
    </div>
  </div>      </div>
      <a href="/" id="scroll-arrow">
        <img src="arrow.png" alt="Scroll Down" />
      </a>
    </>
  );
}

export default Header;
