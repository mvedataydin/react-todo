import React, { Component } from 'react';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list.js';
import './styles/style.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
