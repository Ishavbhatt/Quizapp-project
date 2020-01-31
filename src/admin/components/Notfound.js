import React from "react";
import { Link } from "react-router-dom";
import "../styles/Notfound.css";

class Notfound extends React.Component {
  render() {
    return (
      <div className="notfound-page">
        <h1 className="header-notfound">404</h1>
        <p className="para-notfound">
          Page does not exist! Unless you were looking for this error page, In
          which case you find it!
        </p>
        <center>
          <button className="button-header-notfound">
            <Link className="navbar__link" to="/">
              Go Back to Home
            </Link>
          </button>
        </center>
      </div>
    );
  }
}

export default Notfound;
