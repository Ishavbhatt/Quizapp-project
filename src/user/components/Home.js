import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import "../styles/button.scss";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage-div">
        <div>
          <h1 className="quiz-heading">Want to start quiz click here</h1>
          <div id="container">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              {localStorage.quizuserToken ? (
                <Link className="button-text" to="users/:username/quizsets">
                  start
                </Link>
              ) : (
                <Link className="button-text" to="users/signin">
                  start
                </Link>
              )}
            </button>
          </div>
        </div>
        <div>
          <img src="images/quiz.svg" className="homepage-img" alt="quiz" />
        </div>
      </div>
    </div>
  );
}

export default Home;
