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
    if (this.state.text === '') {
      return null;
    }
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      priority: 'normal',
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
            value={this.state.text}
            name="text"
            type="text"
            autoComplete="new-todo"
            onChange={this.handleChange}
            placeholder=" e.g. Business Meeting Today @14"
            maxLength="70"
          />
          <button className="button-submit" onSubmit={this.handleSubmit}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
