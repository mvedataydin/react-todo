import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.text}</div>;
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
};
