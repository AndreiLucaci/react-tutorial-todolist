import React, { PureComponent } from "react";
import Ex1 from "../Exercices/Exercice1/Ex1.js";
import Ex2 from "../Exercices/Exercice2/Ex2.js";

import "./ExSidebar.css";

class ExSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.ex1 = this.ex1.bind(this);
    this.ex2 = this.ex2.bind(this);
  }

  ex1() {
    this.props.callback(<Ex1 />);
  }

  ex2() {
      this.props.callback(<Ex2 />);
  }

  render() {
    return (
      <div className="ExSidebar">
        <div className="ExSidebar-body">
          <h3 className="ExSidebar-item">Exercices:</h3>
          <span
            className="ExSidebar-block-item ExSidebar-button"
            onClick={this.ex1}
          >
            Exercice 1
          </span>
          <span
            className="ExSidebar-block-item ExSidebar-button"
            onClick={this.ex2}
          >
            Exercice 2
          </span>
        </div>
      </div>
    );
  }
}

export default ExSidebar;
