import React, { Component } from 'react';
import TodoItem from './Todo_Item';

class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
        <TodoItem></TodoItem>
    ));
  }
}

export default Todos;
