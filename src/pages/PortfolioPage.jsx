import React from 'react';
import './PortfolioPage.css';
import githubLogo from '../assets/images/github.png';
import lightbackground from '../assets/images/lightbackground.jpg';
import darkbackground from '../assets/images/darkmode.jpg';
import useThemeToggle from '../hooks/useThemeToggle';
import lightMode from '../assets/images/lightmode.png';
import darkMode from '../assets/images/darkmode.png';
import game from '../assets/images/game.jpg'
import recipe from '../assets/images/flavourheaven.jpg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PortfolioPage = () => {
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
    opacity: isToggled ? 0.5 : 1,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div>
      {/* Portfolio Introduction Section */}
      <section id="portfolio-intro" className="portfolio-intro-section" style={introStyles}>
        <div className="portfolio-intro-overlay" style={overlayStyles}></div>
        <button className="portfolio-toggle-btn" onClick={toggleBackground}>
          <img src={isToggled ? darkMode : lightMode} alt="Toggle" />
        </button>
        <div className="portfolio-intro-content">
          <div className="portfolio-row">
            <div className="portfolio-col-twelve">
              <h5>Welcome to my portfolio,</h5>
              <p className="portifolio-intro-text">My journey as a web developer is just beginning, and I'm already excited about the projects I'm building. I'm continuously challenging myself and learning along the way. Feel free to explore my GitHub for the challenges I've taken on, and check out other projects I'm working on as I grow in this field.</p>
              <div className="portfolio-row">
          <div className="portfolio-col-twelve">
            <h2>Check out my code on GitHub</h2>
            <a href="https://github.com/Larissa-oa">
              <img src={githubLogo} className="portfolio-github-logo" alt="GitHub" />
            </a>
          </div>
        </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Project Section 1 */}
      <section id="project" className="portfolio-project-section">
        <div className="portfolio-row1">
          <div className="portfolio-col-twelve">
            <h3>Project 1: Vanilla JS Game</h3>
            <div className="portfolio-project-content">
            <a href="https://larissa-oa.github.io/gamecode/">
              <img src={game} alt="Project 1" className="portfolio-project-image" />
              </a>
              <div className="portfolio-project-description">
                <p>Game using Vanilla JS. Not responsive -Yet!</p>
                <p>Languages used: HTML5, Vanilla JS, CSS.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-row2">
          <div className="portfolio-col-twelve">
            <h3>Project 2: Recipe Site</h3>
            <div className="portfolio-project-content">
            <a href="https://flavour-heaven.vercel.app">
              <img src={recipe} alt="Project 2" className="portfolio-project-image"  id="recipe"/>
              </a>
              <div className="portfolio-project-description">
                <p>Recipe website using React. The site allows users to browse recipes and do simple interactions. Responsiviness in development.</p>
                <p>Languages used: HTML5, React, Node.js, CSS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer isToggled={isToggled} />
    </div>
  );
};

export default PortfolioPage;
