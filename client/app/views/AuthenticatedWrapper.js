import React from 'react';
import {connect} from 'react-redux';
import {routeActions} from 'redux-simple-router';

const AuthenticatedWrapper = React.createClass({
  componentWillMount() {
    if (localStorage.getItem('authToken')) {
      // this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(routeActions.replace('/log-in'));
    }
  },

  render() {
    return this.props.children;
  }
});

function select() {
}

export default connect()(AuthenticatedWrapper);
