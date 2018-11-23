import React from 'react';

// components
import UserView from '../views/UserView';
import Layout from '../components/Layout';

const Auth = WrappedComponent => {
  return class extends React.Component {
    state = {
      authed: false,
      user: '',
    };

    login = (authed, user) => {
      this.setState({ authed, user });
    };

    render() {
      return (
        <Layout>
          {this.state.authed ? (
            <WrappedComponent user={this.state.user} />
          ) : (
            <UserView updateAuth={this.login} />
          )}
        </Layout>
      );
    }
  };
};

export default Auth;
