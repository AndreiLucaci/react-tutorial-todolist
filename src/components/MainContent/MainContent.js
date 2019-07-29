import React, { PureComponent } from "react";

import ExSidebar from "../ExSidebar/ExSidebar";

import "./MainContent.css";

class MyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderCallback = this.renderCallback.bind(this);
  }

  renderCallback(component) {
    this.setState({ activeComponent: component });
  }

  render() {
    return (
      <div>
        <ExSidebar callback={this.renderCallback} />
        <div className="Main-content">
          <header className="Main-header">
            <p>Exercice area</p>
          </header>
          <div className="Main-exercice-area">
            {/* This is the part that exercices will pe loaded from: */}
            {this.state.activeComponent}
          </div>
        </div>
      </div>
    );
  }
}

export default MyContent;
