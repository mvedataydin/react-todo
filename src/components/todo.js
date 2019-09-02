import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a>{this.props.text}</a>;
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
