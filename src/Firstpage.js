import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/firstpage.css";

class Firstpage extends React.Component {
  render() {
    return (
      <>
        <div className="firstpage-section">
          <center>
            <h1 className="welcome-heading">Welcome To Quiz App</h1>
            <button className="button-header">
              <NavLink
                className="navbar__link-firstpage"
                to={
                  localStorage.quizAdminToken
                    ? `admins/${localStorage.quizAdminToken}/createquiz`
                    : `/admins`
                }
              >
                Login As Admin
              </NavLink>
            </button>
            <button className="button-header">
              <NavLink
                className="navbar__link-firstpage"
                to={
                  localStorage.quizuserToken
                    ? `users/${localStorage.quizusername}/quizsets`
                    : `/users`
                }
              >
                Login As User
              </NavLink>
            </button>
          </center>
        </div>
      </>
    );
  }
}
export default Firstpage;
