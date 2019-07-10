import React from "react";
import "./Character.css";

const CharComponent = props => {
  return (
    <div onClick={props.deleteChar} className="Charstyle">
      <p>{props.eachChar}</p>
    </div>
  );
};
export default CharComponent;
