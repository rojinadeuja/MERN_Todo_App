import React, { Component } from 'react';
import TodoItem from './Todo_Item';
import PropTypes from 'prop-types';

class Todos extends Component {
    markComplete = (id) =>{
        console.log(id);
      }

  render(){
    return this.props.todos.map((todo) => (
        <TodoItem key= {todo.id} 
        todo= {todo} 
        markComplete={this.markComplete}/>
    ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
