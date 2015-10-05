/*global document:false*/
import React from "react";
import {VictoryBrush} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <p>
          <VictoryBrush/>
        </p>
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);
