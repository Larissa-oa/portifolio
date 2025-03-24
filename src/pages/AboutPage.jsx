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
          <p style={pTagStyles}>
            29 years old, originally from Brazil and currently based in Amsterdam. Over the years, I’ve lived in Ireland and Portugal, each of which shaped who I am today. Although I’m now diving into the world of tech, most of my career has been spent in hospitality,  working in fine-dining and Michelin-starred restaurants. But even though I’ve swapped my kitchen tools for coding, I will always be a foodie at heart!
          </p>
          <p style={pTagStyles}>
            Today, I’m fully immersed in the world of web development, currently developing my skills in a Full Stack bootcamp, with a focus on JavaScript, React, and Node.js. Each day I get more excited about coding and the possibilities it gives to me. From creating cool games to applications that can transform people's lives.
          </p>
          <p style={pTagStyles}>
            Alongside development, I’m deeply interested in UX/UI design, constantly exploring ways to enhance the user experience through thoughtful design and innovation. My journey into tech -and into life, one might say- is driven by curiosity and an ongoing desire to learn and evolve. Whether it’s coding, design, or tackling the next big challenge, I’m always excited to see what’s next.
          </p>
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
