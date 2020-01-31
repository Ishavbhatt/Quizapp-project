import React from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

import "../styles/Header.css";

class Header extends React.Component {
  handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("quizAdminToken");
    localStorage.removeItem("quizAdminName");
    this.props.handleIslogged(false);
  };
  PublicHeader = () => {
    return (
      <div>
        <div className="header-div">
          <div className="navbar-brand">
            <Link className="quiz-logo" to="/admins">
              <h1 className="quiz-head">Quizzz</h1>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink
                    activeClassName="navbar__link--active"
                    exact
                    className="navbar_link"
                    to="/admins"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar_link"
                    to="/admins/signup"
                  >
                    Sign up
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar_link"
                    to="/admins/signin"
                  >
                    Sign in
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  PrivateHeader = () => {
    return (
      <div>
        <div className="header-div">
          <div className="navbar-brand">
            <Link className="quiz-logo" to="/admins">
              <h1 className="quiz-head">Quizzz</h1>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button-header">
                    <NavLink
                      // activeClassName="navbar__link--active"
                      className="navbar__link"
                      to="/admins"
                    >
                      Home
                    </NavLink>
                  </button>

                  <button className="button-header">
                    <NavLink
                      // activeClassName="navbar__link--active"
                      className="navbar__link"
                      to="admins/:adminname/createquiz"
                    >
                      Create Quiz
                    </NavLink>
                  </button>
                  <button className="button-header">
                    <NavLink
                      // activeClassName="navbar__link--active"
                      className="navbar__link"
                      to="/admins/:adminname/profile"
                    >
                      Profile
                    </NavLink>
                  </button>

                  <button className="button-header">
                    <NavLink
                      onClick={this.handleLogout}
                      className="navbar__link"
                      to="/admins"
                    >
                      Logout
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="header-wrapper">
          <nav className="header">
            {localStorage.quizAdminToken
              ? this.PrivateHeader()
              : this.PublicHeader()}
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
