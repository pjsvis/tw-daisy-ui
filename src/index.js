import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import "./index.css";

function App() {
  return (
    <div className="App m-4">
      <div>
        <button className="btn btn-xs btn-info">Hello</button>
      </div>
      <TaskList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
