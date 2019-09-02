import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <i onClick={this.props.onClick} className="far fa-circle"></i>;
  }
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired
};
