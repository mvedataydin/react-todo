import React from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      todo: this.props.todo
    };
  }

  render() {
    let className = '';
    className += this.state.todo.complete ? 'fas fa-check-circle ' : 'far fa-circle ';
    className += this.state.todo.priority === 'high' ? ' red ' : '';

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

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};
