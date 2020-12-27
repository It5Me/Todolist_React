import './App.css';
import Todos from "./components/Todos";
import Todoitem from "./components/Todoitem";

import React, { Component } from "react";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "one",
        complete: true  
      },
      {
        id: 2,
        title: "two",
        complete: true
      },
      {
        id: 3,
        title: "three",
        complete: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Todolist</h1>
          <Todos todos={this.state.todos}></Todos>
        </header>
      </div>
    );
  }
}

export default App;
