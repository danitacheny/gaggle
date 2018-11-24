import React from 'react';
import { Link } from 'react-router-dom';

import style from './styles/Form.module.css';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.confirmPassword
    ) {
      this.setState({
        error: 'Please fill out all fields!',
      });
      return;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }
    // TODO: add axios call here
    this.props.history.push('login');
  };

  render() {
    return (
      <div className={style.container}>
        <header>
          <h1>Register:</h1>
        </header>
        {this.state.error && (
          <div className={style.error}>{this.state.error}</div>
        )}
        <form onSubmit={this.handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className={style.input}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className={style.input}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              className={style.input}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit" className={style.button}>
              Register
            </button>
            <Link to="login">
              <button className={style.button}>Login</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
