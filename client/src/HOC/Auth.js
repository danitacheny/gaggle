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

    componentDidMount = () => {
      const user = localStorage.getItem('user');
      let authed = user !== null;
      this.setState({ authed, user });
    }


    login = (authed, user) => {
      localStorage.setItem('user', user);
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
