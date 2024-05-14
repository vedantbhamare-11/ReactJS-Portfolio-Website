import React from 'react';
import './styles/AboutMe.css'; // Import your header styles


const AboutMe = () => {
  return (
   <>
   <section id="about">
  <div className="container">
    <div className="profile-info"></div>
    <img src="1.jpeg" alt="Profile Image" className="profile-pic" />
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Hello there! I'm a coder who's pretty comfy with both Python and
        Front-End stuff. If you're after someone who can make your websites work
        smoothly without any extra fuss, that's me.
        <br />
        <br />
        I like to keep things light, so I sprinkle a bit of humor into the code
        game. Sarcasm, puns, and the occasional dad joke are my way of making
        the coding journey a tad more enjoyable.
        <br />
        <br />
        If you're up for a straightforward and maybe even slightly amusing
        coding experience, let's team up! Together, we'll turn your digital
        dreams into a reality without the tech talk getting too serious.
      </p>
    </div>
  </div>
</section>
</>
  );
}

export default AboutMe;
