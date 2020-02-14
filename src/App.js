import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
class App extends Component {
  state ={
    todos : [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Take out yourself',
        completed: false
      },
      {
        id: 3,
        title: 'Take out your stress',
        completed: false
      }
    ]

  }
  render() {
    console.log(this.state.todos)
  return (
    <div className="App">
      <Todos/>
    </div>
  );
  }
}

export default App;
