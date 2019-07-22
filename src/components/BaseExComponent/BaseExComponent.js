import React, { PureComponent } from "react";
import "./BaseExComponent.css";

export default props => {
  return (
    <div className="BaseExComponent">
      <div className="BaseExComponent-header">Objective: {props.objective}</div>
      {props.children}
    </div>
  );
};
