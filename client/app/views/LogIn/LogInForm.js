import React from 'react';
import {connect} from 'react-redux';
import {getAsyncState} from 'redux-happy-async';

import {logIn} from '../../actions/AccountActions';
import {LOGIN} from '../../ActionTypes';

const LogInForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const form = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    this.props.dispatch(logIn(form));
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" ref="email" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" ref="password" />
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
});

function select(state) {
  return {
    loginState: getAsyncState(state.auth, LOGIN)
  };
}

export default connect(select)(LogInForm);
