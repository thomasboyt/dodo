import React from 'react';
import {connect} from 'react-redux';
import {routeActions} from 'redux-simple-router';

const AuthenticatedWrapper = React.createClass({
  componentWillMount() {
    if (localStorage.getItem('authToken')) {
      // this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(routeActions.push('/log-in'));
    }
  },

  render() {
  }
});

function select() {
}

export default connect()(AuthenticatedWrapper);
