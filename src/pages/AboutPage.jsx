import React from 'react';
import './AboutPage.css';
import myPhoto from '../assets/images/larissa.jpeg';
import useThemeToggle from '../hooks/useThemeToggle';  
import lightbackground from '../assets/images/lightbackground.jpg';
import darkbackground from '../assets/images/darkmode.jpg'
import lightMode from '../assets/images/lightmode.png';
import darkMode from '../assets/images/darkmode.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const { isToggled, toggleBackground } = useThemeToggle();  

  const introStyles = {
    backgroundColor: isToggled ? '#fff' : '#111',
    backgroundImage: isToggled
      ? `url(${lightbackground})`
      : `url(${darkbackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  const overlayStyles = {
    opacity: isToggled ? 0.4 : 1.2,
    transition: 'opacity 0.3s ease',
  };

  const languagesSectionStyles = {
    backgroundColor: isToggled ? '#fff' : '#111',
  };

  const pTagStyles = {
    color: isToggled ? 'rgb(65, 65, 65)': '#b3b3b3' ,
  };

  return (
    <div className="about-page" style={introStyles}>
      <section id="about" className="about-section" style={introStyles}>
        <div className="about-overlay" style={overlayStyles}></div>
        <button className="toggle-btn" onClick={toggleBackground}>
          <img
            src={isToggled ? darkMode : lightMode }
            alt="Toggle"
          />
        </button>
        <div className="profile-picture-container">
          <img src={myPhoto} alt="Myself" className="profile-picture" />
        </div>

        <div className="about-text">
          <h1>I'm Larissa Almeida</h1>
          <p style={pTagStyles}> I’m 29, originally from Brazil, and now based in Amsterdam. But I also lived in some other countries like Ireland and Portugal. I love immersing myself in different cultures and these experiences definitely play a big part in shaping who I am. Most of my career was spent in hospitality, working as a chef in fine dining and Michelin-starred restaurants. Now, I’m trading my kitchen tools for coding, but I’ll always be a foodie at heart! </p>
          <p style={pTagStyles}> These days, I'm fully immersed in web development and currently sharpening my skills in a Full Stack bootcamp, with a focus on JavaScript, React, MongoDB and Node.js. It's being a fun journey and each day I get more excited about the possibilities coding offers — from building fun games to creating apps that could change the world (or at least make someone's day a little easier). </p>
          <p style={pTagStyles}> Outside of development, I’m passionate about photography, pottery and design, being UX/UI one of those things! I'm fascinsted about learning ways to improve user experiences through smart, intuitive design. My journey into tech — and life, for that matter — is fueled by an endless curiosity and a desire to learn. Whether it’s cooking, coding, design, or tackling my next big challenge, I’m always eager to see what comes next.</p>
        </div>
      </section>

      <section className="languages" style={languagesSectionStyles}>
        <h2>Languages & Technologies</h2>
        <div className="languages-list">
          <div className="language-card">
            <h3>JavaScript</h3>
          </div>
          <div className="language-card">
            <h3>HTML5</h3>
          </div>
          <div className="language-card">
            <h3>CSS</h3>
          </div>
          <div className="language-card">
            <h3>React</h3>
          </div>
          <div className="language-card learning">
            <h3>Node.js</h3>
          </div>
          <div className="language-card learning">
            <h3>MongoDB</h3>
          </div>
        </div>
      </section>
      <Footer isToggled={isToggled} />
    </div>
  );
};

export default AboutPage;
