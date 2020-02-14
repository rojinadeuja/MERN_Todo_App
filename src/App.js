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
        title: 'Take out your doubts',
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
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
  }
}

export default App;
