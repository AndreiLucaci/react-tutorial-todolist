import React, { PureComponent } from "react";

import logo from "../../logo.svg";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header-content">
        <div >
          <h2>
            <img src={logo} className="Header-logo" alt="logo" />
            This app is following the tutorial linked here:
            <img src={logo} className="Header-logo" alt="logo" />
          </h2>
          <a
            href="https://youtu.be/DLX62G4lc44"
            className="Header-link"
            target="_blank"
            rel="noopener noreferencer"
          >
            Learn React.js - Full Course for Beginners - Tutorial 2019
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
