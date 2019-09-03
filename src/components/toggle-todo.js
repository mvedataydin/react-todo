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
  handleCLick = () => {
    let newState = this.state.active ? false : true;
    this.setState({ active: newState });
  };
  render() {
    let className = '';
    className += this.state.active ? 'fas fa-check-circle ' : 'far fa-circle ';
    className += this.props.todo.priority === 'high' ? ' red ' : '';

    return (
      <i
        onClick={() => {
          this.props.onClick();
          this.handleCLick();
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
