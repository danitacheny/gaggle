import React, { Component } from 'react';
import './App.css';

import UserView from './views/UserView';

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
        <UserView user={this.state.user}/>
      </div>
    );
  }
}

export default App;
