import React from 'react';
import './styles/Connect.css'; // Import your header styles

const Connect = () => {
  const composeEmail = () => {
    const email = 'vedantdbhamare@gmail.com';
    const subject = 'Let\'s Connect';
    const body = 'Hi Vedant,\n\nI would like to connect with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleGetInTouch = () => {
    composeEmail();
  };

  return (
    <>
      <section id="connect">
        <div className="container">
          <h2 className="connect-heading">
            Let's <span>Connect</span> and <span>Create</span>
          </h2>
          <p className="sub-heading">
            Drop me a DM, always up for Tech Talk, Side Hustles, and Opportunities
          </p>
          <div className="connect-card">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/vedant-bhamare-4086281a4/"
                target="_blank"
              >
                <img
                  className="social-icon"
                  src="Social Media Icons/linkedin.png"
                  alt="LinkedIn Icon"
                />
              </a>
              <a href="https://www.instagram.com/vedantbhamare_/" target="_blank">
                <img
                  className="social-icon"
                  src="Social Media Icons/instagram.png"
                  alt="Instagram Icon"
                />
              </a>
              <a href="https://twitter.com/VedantBhamare8" target="_blank">
                <img
                  className="social-icon"
                  src="Social Media Icons/twitter.png"
                  alt="Twitter Icon"
                />
              </a>
            </div>
          </div>
          <div className="get-in-touch">
            <p className="connect-text">Wanna connect formally?</p>
            <button onClick={handleGetInTouch}>Get in Touch</button>
          </div>
          <div className="check-out-profiles">
            <p>Also, check out my profiles on</p>
            <div className="profile-card">
              <div className="profile-icons">
                <a href="https://github.com/vedantbhamare-11" target="_blank">
                  <img
                    className="profile-icon"
                    src="Social Media Icons/github.png"
                    alt="GitHub Icon"
                  />
                </a>
                <a href="https://dev.to/vedantbhamare" target="_blank">
                  <img
                    className="profile-icon"
                    src="Social Media Icons/dev.png"
                    alt="Dev.to Icon"
                  />
                </a>
                <a href="https://medium.com/@vedantdbhamare" target="_blank">
                  <img
                    className="profile-icon"
                    src="Social Media Icons/medium.png"
                    alt="Medium Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
