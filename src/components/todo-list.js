import React from 'react';
import TodoForm from './todo-form.js';
import Todo from './todo.js';
import { stringify } from 'querystring';

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
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    );
  }
}
