import React from 'react'

// components
import UserView from '../views/UserView';

const Auth = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      authed: false,
      user: '',
    }

    login = (authed, user) => {
      this.setState({ authed, user });
    }

    render() {
      if (this.state.authed) {
        return <WrappedComponent user={this.state.user}/>
      } else {
        return <UserView updateAuth={this.login}/>
      }
    }
  }
}

export default Auth;
