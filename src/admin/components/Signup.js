import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../styles/Signup.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      adminname: "",
      adminemail: "",
      adminpassword: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAdminSignup = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        adminname: this.state.adminname,
        adminemail: this.state.adminemail,
        adminpassword: this.state.adminpassword
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          alert("successfully registered");
          this.props.history.push("/admins/signin");
        } else {
          alert("enter valid details");
        }
      });
  };

  render() {
    return (
      <center>
        <div className="signup-div">
          <div className="rightsignup-section">
            <h1 className="rightside-signupheader">Hello Friends!</h1>
            <p className="rightside-signupheader">
              Already Have An Account? GO for Signin
            </p>
            <button className="signup-button">
              <Link className="span" to="admins/signin">
                Signup
              </Link>
            </button>
          </div>
          <div className="leftsignup-section">
            <h1 className="rightside-header">Sign Up for Admin</h1>

            <div className="input-icons">
              <i className="fas fa-user icon"></i>
              <input
                className="input-username"
                type="text"
                name="adminname"
                onChange={this.handleChange}
                value={this.state.adminname}
                placeholder="Name"
              />
            </div>
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
            <button onClick={this.handleAdminSignup} className="signup-button">
              SIGN UP
            </button>
          </div>
        </div>
      </center>
    );
  }
}

export default withRouter(Signup);
