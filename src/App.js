import React, { Component } from 'react';
import TodoForm from './components/todo-form.js';
import TodoList from './components/todo-list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello from Main app
        <TodoList />
      </div>
    );
  }
}
