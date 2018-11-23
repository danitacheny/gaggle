import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';

class UserView extends Component {
  render() {
    return (
      <div>
        <Route path='/login' render={(props) => <Login {...props} updateAuth={this.props.updateAuth} />} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default UserView;
