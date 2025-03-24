import React from 'react';
import './HomePage.css';
import githubLogo from '../assets/images/github.png';
import linkedinLogo from '../assets/images/linkedin.png';
import lightbackground from '../assets/images/lightbackground.jpg';
import darkbackground from '../assets/images/darkmode.jpg'
import lightMode from '../assets/images/lightmode.png';
import darkMode from '../assets/images/darkmode.png';
import { Link } from 'react-router-dom';
import useThemeToggle from '../hooks/useThemeToggle';  // Import custom hook
import Footer from '../components/Footer';

const HomePage = () => {
  const { isToggled, toggleBackground } = useThemeToggle();  // Using the custom hook

  const introStyles = {
    backgroundColor: isToggled ? '#fff' : '#111',
    backgroundImage: isToggled
      ? `url(${lightbackground})`
      : `url(${darkbackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  const overlayStyles = {
    opacity: isToggled ? 0.5 : 1,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div>
      <section id="intro" style={introStyles}>
        <div className="intro-overlay" style={overlayStyles}></div>
        <button className="toggle-btn" onClick={toggleBackground}>
          <img src={isToggled ? darkMode : lightMode} alt="Toggle" />
        </button>
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, </h5>
              <h1>I'm Larissa Almeida.</h1>
              <p className="intro-position">
                <span>| MERNE Web Developer |</span> 
              </p>
              <Link to="/about">
                <a className="button stroke smoothscroll" title="">Let me tell you more about myself</a>
              </Link>
            </div>
          </div>         
        </div>

        <ul className="intro-social">
          <li>
            <a href="https://github.com/Larissa-oa">
              <img src={githubLogo} id="github" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/larissa-almeida-2a8370253/">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </section>
	  <Footer isToggled={isToggled} />
    </div>
  );
};

export default HomePage;
