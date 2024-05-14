
import React, { useEffect } from 'react';
import './styles/Timeline.css'; // Import your header styles


const Timeline = () => {
  useEffect(() => {
    const timelineLine = document.querySelector(".timeline-line");
    const timelineImage = document.querySelector(".timeline-image");
    const maxTimelineHeight = (document.querySelectorAll(".my-container").length - 1) * 100;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / maxTimelineHeight) * 65; // Adjust the speed as needed
      const adjustedPercentage = Math.min(100, scrollPercentage);
      timelineLine.style.height = `${adjustedPercentage}%`;
      timelineImage.style.top = `${adjustedPercentage}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once on component mount

  return (
    <>
      <h2 className="timeline-heading">My Story thus far...</h2>
      <div className="my-timeline">
      <div className="my-container left-container">
      <h5>Year 2017</h5>
      <div className="text-box">
        <p>
          <span>⇒</span> In my tenth grade year, I started to get interested in
          the topic of web development. The introduction of HTML, CSS ,JS
          increased My interest in coding.{" "}
        </p>
        <p>
          <span>⇒</span> After that, I experimented with JavaScript, which
          provided the framework for my technological journey.
        </p>
      </div>
    </div>
    <div className="my-container right-container">
      <h5>Year 2019 - 2023</h5>
      <div className="text-box">
        <p>
          <span>⇒</span> Began my journey to become a computer engineer!
        </p>
        <p>
          <span>⇒</span> Developed proficiency in Python, JavaScript, and Java.
        </p>
        <p>
          <span>⇒</span> Explored the area of web development and produced
          notable pieces.
        </p>
      </div>
    </div>
    <div className="my-container left-container">
      <h5>June 2023</h5>
      <div className="text-box">
        <p>
          <span>⇒</span> Worked as an ML intern at IBC Cube!
        </p>
        <p>
          <span>⇒</span> Worked on Asset/Defect Detection on Roads using Machine
          Learning with an incredible team.
        </p>
        <p>
          <span>⇒</span> Practical experience in data preprocessing, model
          training, and assessment.
        </p>
        <p>
          <span>⇒</span> Using ML and Python libraries to create creative
          solutions.
        </p>
      </div>
    </div>
    <div className="my-container right-container">
      <h5>August 2023</h5>
      <div className="text-box">
        <p>
          <span>⇒</span> Interned at Procedure Technologies' Full Stack
          Developer Bootcamp!
        </p>
        <p>
          <span>⇒</span> Acquired proficiency in several web development
          frameworks and HTML, CSS, TypeScript, ReactJS.
        </p>
        <p>
          <span>⇒</span> My skills were refined via real-world initiatives,
          which promoted cooperation and problem-solving.
        </p>
        <p>
          <span>⇒</span> Currently proficient at creating and implementing
          full-stack applications.
        </p>
      </div>
    </div>
    <div className="timeline-line" />
    <div className="timeline-image-container">
      <img className="timeline-image" src="Avatar.png" alt="" />
      <div className="tooltip">Learning and Growing!</div>
    </div>      </div>
    </>
  );
}

export default Timeline;
