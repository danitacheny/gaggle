import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';

class UserView extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route exact path='/login' render={(props) => <Login {...props} updateAuth={this.props.updateAuth} />} />
        <Route exact path='/register' component={Register} />
      </React.Fragment>
    );
  }
}

export default UserView;
