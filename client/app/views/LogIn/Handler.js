import React from 'react';

import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';

const LogIn = React.createClass({
  getInitialState() {
    return {
      showRegister: false
    };
  },

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          <h2>
            <a onClick={() => this.setState({showRegister: false})}>
              Log In
            </a>
            {' / '}
            <a onClick={() => this.setState({showRegister: true})}>
              Register
            </a>
          </h2>

          {this.state.showRegister ? <RegisterForm /> : <LogInForm />}
        </div>
      </div>
    );
  }
});

export default LogIn;
