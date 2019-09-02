import React, { Component } from 'react';
import TodoForm from './todo-form';
import Todo from './todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  addTodo = todo => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };
  render() {
    return (
      <div>
        {console.log(this.state.todos)}
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </div>
    );
  }
}
