import React from 'react';
import PropTypes from 'prop-types';

export default class Priority extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todo
    };
  }
  render() {
    let className =
      this.state.todos.priority !== 'normal' ? 'fas fa-flag red' : 'fas fa-flag';
    return (
      <i
        onClick={() => {
          this.props.onClick();
        }}
        className={className}
      ></i>
    );
  }
}

Priority.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};
