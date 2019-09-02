import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        {this.props.id},{this.props.text}
      </div>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
