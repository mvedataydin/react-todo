import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    };
  }
  render() {
    // check priority and completed , add class according to situation
    let className = '';
    className += this.props.todo.priority === 'normal' ? '' : 'red ';
    className += this.props.todo.complete === false ? '' : 'green ';
    return <a className={className}>{this.props.text}</a>;
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todo: PropTypes.object.isRequired
};
