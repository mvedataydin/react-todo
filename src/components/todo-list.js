import React, { Component } from 'react';
import TodoForm from './todo-form';
import Todo from './todo';
import Toggle from './toggle-todo';
import Delete from './delete-todo';
import Priority from './priority-todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo = todo => {
    let newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };
  priorityTodo = todo => {
    let currentTodos = [...this.state.todos];
    let index = currentTodos.indexOf(todo);
    currentTodos[index].priority =
      currentTodos[index].priority === 'normal' ? 'high' : 'normal';
    console.log(currentTodos[index].priority);

    this.setState({ todos: currentTodos });
  };
  toggleTodo = todo => {
    let currentTodos = [...this.state.todos];
    let index = currentTodos.indexOf(todo);
    currentTodos[index].complete = currentTodos[index].complete === false ? true : false;
    console.log(currentTodos[index].complete);
    this.setState({ todos: currentTodos });
  };
  deleteTodo = todo => {
    let currentTodos = [...this.state.todos];
    let index = currentTodos.indexOf(todo);
    currentTodos.splice(index, 1);
    this.setState({ todos: currentTodos });
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <Toggle onClick={this.toggleTodo.bind(this, todo)} todo={todo} />
              <Priority onClick={this.priorityTodo.bind(this, todo)} todo={todo} />
              <Todo text={todo.text} id={todo.id} todo={todo} />
              <Delete id={todo.id} onClick={this.deleteTodo.bind(this, todo)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
