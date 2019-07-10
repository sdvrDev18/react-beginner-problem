import React, { Component } from "react";
import "./App.css";
import Validation from "./Components/Validation";
import Character from "./Components/Character";

class App extends Component {
  state = {
    inputVal: "",
    textLength: 0,
    eachChar: ""
  };
  handleChange = event => {
    let newVar = event.target.value;
    let varLength = newVar.length;
    console.log("newVar", newVar);
    this.setState({
      inputVal: newVar,
      textLength: varLength
    });
  };
  deleteChar = index => {
    let text = this.state.inputVal.split("");
    text.splice(index, 1);
    let newText = text.join("");
    this.setState({
      inputVal: newText
    });
  };
  render() {
    const showChar = this.state.inputVal.split("").map((val, index) => {
      return (
        <Character
          eachChar={val}
          key={index}
          deleteChar={() => this.deleteChar(index)}
        />
      );
    });
    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div>
          <hr />
          <h2>SOLUTION</h2>
          <span>
            Enter some text : {"  "}
            <input onChange={this.handleChange} value={this.state.inputVal} />
          </span>

          <p>
            <i>The entered text is : </i> {this.state.inputVal}
          </p>
          <Validation textLength={this.state.textLength} />
          {showChar}
        </div>
      </div>
    );
  }
}

export default App;
