import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';

class App extends Component {
  state = {
    user: '',
  }

  updateState = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        <Login updateLogin={this.updateState} />
        {this.state.user}
      </div>
    );
  }
}

export default App;
