import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../styles/Signup.css";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      adminemail: "",
      adminpassword: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAdminSignin = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/admins/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        adminemail: this.state.adminemail,
        adminpassword: this.state.adminpassword
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert("successfully loggedin");
          localStorage.setItem("quizAdminToken", data.token);
          localStorage.setItem("quizAdminName", data.adminname);
          this.props.handleIslogged(true);
          this.props.history.push(
            `/admins/${localStorage.quizAdminName}/createquiz`
          );
        }
      });
  };

  render() {
    return (
      <center className="signin-bg">
        <div className="signup-div">
          <div className="leftsignup-section">
            <h1 className="leftsidetext-sighinheader">Sign In for Admin</h1>

            <div className="input-icons">
              <i className="fas fa-envelope icon"></i>
              <input
                className="input-email"
                type="email"
                name="adminemail"
                value={this.state.adminemail}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div className="input-icons">
              <i className="fas fa-lock icon"></i>
              <input
                className="input-password"
                type="password"
                name="adminpassword"
                value={this.state.adminpassword}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <button onClick={this.handleAdminSignin} className="signup-button">
              SIGN IN
            </button>
          </div>
          <div className="rightsignup-section">
            <h1 className="rightside-signinheader">Hello Friends!</h1>
            <p className="rightside-signinheader">
              Dont't Have An Account Signup First
            </p>
            <button className="signup-button">
              <Link className="span" to="admins/signup">
                Signup
              </Link>
            </button>
          </div>
        </div>
      </center>
    );
  }
}

export default withRouter(Signin);
