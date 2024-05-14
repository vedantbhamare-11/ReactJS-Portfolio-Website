import React from 'react';
import './styles/Motto.css'; // Import your header styles

const Motto = () => {
  return (
    <>
    <section id="motto-section">
  <div className="container">
    <h2 className="motto-heading">Motto That Drives Me</h2>
    <p className="motto-quote">
      <span className="quote">“</span>The Windshields are <span>LARGER</span>{" "}
      than the rearview mirror for a reason!<span className="quote">”</span>
    </p>
  </div>
</section>
</>
  );
}

export default Motto;
