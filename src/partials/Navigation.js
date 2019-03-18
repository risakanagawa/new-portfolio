import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <nav className="navigation">
          <h1>R</h1>
          <ul>
            <li>
              <AnchorLink href="#about">ABOUT</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#work">WORK</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">CONTACT</AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
