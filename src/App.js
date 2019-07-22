import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import exercices

import ExSidebar from "./components/ExSidebar/ExSidebar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderCallback = this.renderCallback.bind(this);
  }

  renderCallback(component) {
    this.setState( { activeComponent : component } );
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <ExSidebar callback={this.renderCallback} />
          <h2>
            <img src={logo} className="App-logo" alt="logo" />
            This app is following the tutorial linked here:
            <img src={logo} className="App-logo" alt="logo" />
          </h2>
          <a
            href="https://youtu.be/DLX62G4lc44"
            className="App-link"
            target="_blank"
            rel="noopener noreferencer"
          >
            Learn React.js - Full Course for Beginners - Tutorial 2019
          </a>

          <header className="App-header">
            <p>Exercice area</p>
          </header>

          <div className="App-exercice-area">
            {/* This is the part that exercices will pe loaded from: */}
            {this.state.activeComponent}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
