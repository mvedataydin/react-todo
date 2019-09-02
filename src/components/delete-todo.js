import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <i
        id={this.props.id}
        onClick={this.props.onClick}
        className="fas fa-minus-circle"
      ></i>
    );
  }
}

Delete.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
