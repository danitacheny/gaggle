import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={this.state.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} />
        </div>
        <button>Login</button>
      </form>
    </div>);
  }
}

export default Login;
