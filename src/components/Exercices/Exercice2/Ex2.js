import React, { PureComponent } from "react";
import BasExComponent from "../../BaseExComponent/BaseExComponent";

import MyInfo from "./MyInfo";

import "./Ex2.css";

class Ex2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objective: `Create a functional component called MyInfo that returns the following UI:
        a. An h1 with your name
        b. A paragraph with a little blurb about yourself
        c. An ordered or unordered list of the top 3 vacation spots you'd like to visit`
    };
  }

  render() {
    return (
      <BasExComponent objective={this.state.objective}>
        {this.buildUp()}
      </BasExComponent>
    );
  }

  buildUp() {
      return <MyInfo />
  }
}

export default Ex2;
