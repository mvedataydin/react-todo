import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleCLick = () => {
    let newState = this.state.active ? false : true;
    this.setState({ active: newState });
  };
  render() {
    let className = this.state.active ? 'fas fa-check-circle' : 'far fa-circle';
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
  onClick: PropTypes.func.isRequired
};
