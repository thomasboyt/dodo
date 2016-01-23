import React from 'react';
import {connect} from 'react-redux';

const Home = React.createClass({
  render() {
    return (
      <p>
        You logged in! Yay.
      </p>
    );
  }
});

function select(state) {
  return {
  };
}

export default connect(select)(Home);
