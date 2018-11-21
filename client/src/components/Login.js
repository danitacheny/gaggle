import React from 'react';

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
  }

  render() {
    return (
    <div>
        <div>{this.state.error}</div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button>Login</button>
      </form>
    </div>);
  }
}

export default Login;
