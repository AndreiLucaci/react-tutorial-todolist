import React, { PureComponent } from "react";

import './MyInfo.css';

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  myInfo() {
    return "Hello. My name is Andrei and I'm learning React.";
  }

  top3Vacations() {
    return ["Hawaii", "Birsbain", "Cape town"].map(x => <li key={x}>{x}</li>);
  }

  render() {
    return (
      <div className='MyInfo-body'>
        <h1>Andrei Lucaci</h1>
        <p>{this.myInfo()}</p>
        <ul>{this.top3Vacations()}</ul>
      </div>
    );
  }
}

export default MyInfo;