import React from 'react'

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;
