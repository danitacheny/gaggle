import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';

class UserView extends Component {
  render() {
    return (
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default UserView;
