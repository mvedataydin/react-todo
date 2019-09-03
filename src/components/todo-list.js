import React from 'react';
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
  }

  static getDerivedStateFromProps = (props, state) => {
    if (state.todos.length !== 0) {
      let currentState = state.todos;
      localStorage.setItem('todos', JSON.stringify(currentState));
    }
    return {
      todos: JSON.parse(localStorage.getItem('todos'))
    };
  };

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
    this.setState({ todos: currentTodos });
  };
  toggleTodo = todo => {
    let currentTodos = [...this.state.todos];
    let index = currentTodos.indexOf(todo);
    currentTodos[index].complete = currentTodos[index].complete === false ? true : false;
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
      <div className="container">
        <h1>
          <i className="fas fa-calendar-check"></i> toDoList
        </h1>
        <TodoForm onSubmit={this.addTodo} />
        <table>
          <tr>
            <td>
              <hr className="seperate" />
            </td>
          </tr>
          {this.state.todos.map(todo => (
            <tr key={todo.id} className="todo-container hover">
              <td>
                <Toggle onClick={this.toggleTodo.bind(this, todo)} todo={todo} />
              </td>
              <td>
                <Priority onClick={this.priorityTodo.bind(this, todo)} />
              </td>
              <td>
                <Todo text={todo.text} id={todo.id} todo={todo} />
              </td>
              <td className="delete-todo">
                <Delete id={todo.id} onClick={this.deleteTodo.bind(this, todo)} />
              </td>
              <td>
                <hr />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
