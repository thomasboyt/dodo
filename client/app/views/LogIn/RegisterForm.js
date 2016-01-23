import React from 'react';
import {connect} from 'react-redux';
import {getAsyncState} from 'redux-happy-async';

import {register} from '../../actions/AccountActions';
import {REGISTER} from '../../ActionTypes';

const RegisterForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const form = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirm.value
    };

    this.props.dispatch(register(form));
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" ref="name" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" ref="email" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" ref="password" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" id="password-confirm" className="form-control" ref="passwordConfirm" />
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  }
});

function select(state) {
  return {
    registerState: getAsyncState(state.auth, REGISTER)
  };
}

export default connect(select)(RegisterForm);
