import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ''
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todo..."
          />
        </div>
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
