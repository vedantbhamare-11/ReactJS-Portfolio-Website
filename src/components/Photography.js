import React from 'react';
import './styles/Photography.css'; // Import your header styles

const Photography = () => {
  return (
    <>
    <section id="photography">
  <div className="container">
    <h2 className="photography-heading">My Escape from Reality</h2>
    <div id="container" className="photo">
      <p className="escape-text">
        "I escape the bustling world and unwind with photography. I find comfort
        in looking through the lens because it enables me to record peaceful
        moments. Each click in the dance of light and emotion seems like an
        intentional pause. It's a location where everyday objects are given
        profound meaning by the framing."
      </p>
      <div className="element element--horizontal" draggable="true">
        <img className="image" src="Photography/1.jpg" alt="" />
      </div>
      <div className="element element--horizontal" draggable="true">
        <img className="image" src="Photography/2.jpg" alt="" />
      </div>
      <div className="element element--horizontal" draggable="true">
        <img className="image" src="Photography/3.jpg" alt="" />
      </div>
      <div className="element element--horizontal" draggable="true">
        <img className="image" src="Photography/4.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/5.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/6.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/7.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/8.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/9.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/10.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/11.jpg" alt="" />
      </div>
      <div className="element element--vertical" draggable="true">
        <img className="image" src="Photography/12.jpg" alt="" />
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Photography;
