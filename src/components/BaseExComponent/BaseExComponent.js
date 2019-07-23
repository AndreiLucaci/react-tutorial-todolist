import React, { PureComponent } from "react";
import "./BaseExComponent.css";

export default props => {
  return (
    <div className="BaseExComponent">
      <h4>Objective: </h4>
      <div className="BaseExComponent-header">{props.objective}</div>
      <h4>Result: </h4>
      <div className="BaseExComponent-body">{props.children}</div>
    </div>
  );
};
