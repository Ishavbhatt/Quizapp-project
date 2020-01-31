import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../styles/Signup.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUserSignUp = event => {
    console.log(event);
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.user) {
          this.props.history.push("/users/signin");
        }
      });
  };

  render() {
    return (
      <center>
        <div className="signup-div">
          <div className="rightsignup-section">
            <h1 className="leftside-header"> Sign Up for User </h1>
            <form>
              <div className="input-icons">
                <i className="fas fa-user icon"></i>
                <input
                  className="input-username"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  placeholder="UserName"
                />
              </div>
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
              <button onClick={this.handleUserSignUp} className="signup-button">
                SIGN UP
              </button>
            </form>
          </div>
          <div className="leftsignup-section">
            <h1 className="rightside-header">Hello Friends!</h1>
            <p>Already Have An Account! Go for Signin</p>
            <button className="signup-button">
              <Link className="span" to="/users/signin">
                Signin
              </Link>
            </button>
          </div>
        </div>
      </center>
    );
  }
}

export default withRouter(Signup);
