import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Please fill out both email and password fields!',
      });
    } else {
      this.props.updateLogin('user', this.state.email);
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        Don't have an account?
        <Link to='register'><button>Register a New Account</button></Link>
      </div>
    );
  }
}

export default Login;
