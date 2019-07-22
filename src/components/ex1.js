// Objective: Fill in the boilerplate Reat code required to render an unorder list <ul> to the page
// The list should contain 3 list itmes (<li>) with anything that you want.

import React from "react";

import BaseExComponent from "./BaseExComponent/BaseExComponent";

class Ex1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseExComponent objective="Fill in the boilerplate Reat code required to render an unorder list <ul> to the page. The list should contain 3 list itmes (<li>) with anything that you want.">
        {this.buildUp()}
      </BaseExComponent>
    );
  }

  buildUp() {
    return (
      <ul>
        {["anything", "that", "i want"].map(x => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    );
  }
}

export default Ex1;
