import React, { Component } from "react";
import resume from '../../public/document/resume-risa-kanagawa.pdf';

class AboutMe extends Component {
  render() {
    return (
      <div id='about' className="about-container">
        <div className="about-back-text">
          <h1>About</h1>
          <h1>Me</h1>
        </div>
        <div className="about-left">
          <h2>RISA KANAGAWA</h2>
          <p>
            I love combining things. My background is linguistics. I believe
            that not only technical or pratical skills, everything we've
            experienced in our life can be mixed up and result in great outcome
            together. I am really passionate about helping and building things
            coming out from just an idea to make people's lifes better. I code,
            sometimes design.
          </p>
          <a href={resume} className='resume-btn'>RESUME</a>
        </div>
        <div className="about-right">
          <div className="about-right-contents">
            <div className="skill-set">
              <ul>
                <li>💻</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Redux JS</li>
                <li>PHP</li>
                <li>Word Press</li>
                <li>jQuery</li>
                <li>Sketch</li>
              </ul>
            </div>
            <div className="experiences">
              <ul>
                <li>❤️</li>
                <li>Language</li>
                <li>Cooking</li>
                <li>Gadget</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
