import React from 'react';
import { Link } from 'react-router-dom';

import style from './styles/Form.module.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Please fill out both email and password fields!',
      });
    } else {
      // TODO add axios call
      this.props.updateAuth(true, this.state.email);
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div className={style.container}>
        <header>
          <h1>Login:</h1>
        </header>
        <form onSubmit={this.handleSubmit} className={style.form}>
          {this.state.error && (
            <div className={style.error}>{this.state.error}</div>
          )}
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="user@email.com"
              className={style.input}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className={style.input}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit" className={style.button}>
              Login
            </button>
            <Link to="register">
              <button className={style.button}>Register a New Account</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
