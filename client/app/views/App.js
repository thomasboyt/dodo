import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
});

export default App;
