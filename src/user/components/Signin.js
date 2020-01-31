import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../styles/Signup.css";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUserSignin = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.token) {
          alert("Login Successfully");
          localStorage.setItem("quizuserToken", data.token);
          localStorage.setItem("quizusername", data.username);
          this.props.handleIslogged(true);
          this.props.history.push(
            `/users/${localStorage.quizusername}/quizsets`
          );
        }
      });
  };

  render() {
    return (
      <center className="signin-bg">
        <div className="signup-div">
          <div className="leftsignin-section">
            <h1 className="leftside-header">Hello Friends!</h1>
            <p>Don't Have An Account Signin First?</p>
            <button className="signup-button">
              <Link className="span" to="/users/signup">
                Signup
              </Link>
            </button>
          </div>
          <div className="rightsignin-section">
            <h1 className="rightside-header">Sign In for User</h1>

            <div className="input-icons">
              <i className="fas fa-envelope icon"></i>
              <input
                className="input-email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div className="input-icons">
              <i className="fas fa-lock icon"></i>
              <input
                className="input-password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <button onClick={this.handleUserSignin} className="signup-button">
              SIGN IN
            </button>
          </div>
        </div>
      </center>
    );
  }
}

export default withRouter(Signin);
