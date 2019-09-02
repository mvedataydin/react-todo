import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Priority extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleClick = () => {
    let newState = this.state.active ? false : true;
    this.setState({ active: newState });
  };
  render() {
    let className = this.state.active ? 'fas fa-flag red' : 'fas fa-flag';
    return (
      <i
        onClick={() => {
          this.props.onClick;
          this.handleClick;
        }}
        className={className}
      ></i>
    );
  }
}

Priority.propTypes = {
  onClick: PropTypes.func.isRequired
};
