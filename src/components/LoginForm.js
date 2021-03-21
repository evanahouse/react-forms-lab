import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(this.state)

  }

  render() {
    console.log(this.state.username)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleInputChange} id="username" name="username" type="text" required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleInputChange} id="password" name="password" type="password" required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
