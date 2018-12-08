import React, { Component } from 'react';

import Auth from './HOC/Auth';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.user} is logged in.
      </div>
    );
  }
}

export default Auth(App);
