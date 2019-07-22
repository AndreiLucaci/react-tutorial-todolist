import React, { PureComponent } from "react";
import Ex1 from "../Ex1";

import "./ExSidebar.css";

class ExSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.ex1 = this.ex1.bind(this);
  }

  ex1() {
    this.props.callback(<Ex1 />);
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
          <span className="ExSidebar-block-item ExSidebar-button">Link 1</span>
          <span className="ExSidebar-block-item ExSidebar-button">Link 1</span>
        </div>
      </div>
    );
  }
}

export default ExSidebar;
