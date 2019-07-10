import React from "react";

const ValidationComponent = props => {
  return (
    <div>
      <p>Length of the text is {props.textLength} characters</p>
      {props.textLength <= 5 ? (
        <h5>The text entered is too short</h5>
      ) : (
        <h5>The text entered is long enough</h5>
      )}
    </div>
  );
};
export default ValidationComponent;
