import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/Showquiz.css";

class Showquiz extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      quizname: "",
      filterqns: [],
      marks: 0,
      ans: false
    };
  }
  handleQuizzes = () => {
    this.setState({ quizname: this.props.match.params.quizname });
    fetch("http://localhost:3000/api/v1/quizzes")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          data.questions.map(question =>
            question.quizset === this.state.quizname
              ? this.setState({
                  filterqns: this.state.filterqns.concat(question)
                })
              : ""
          );
        }
      });
  };

  componentDidMount() {
    this.handleQuizzes();
  }

  handleAns = (event, _id, ans) => {
    this.setState({ ans: true });
    event.target.parentElement.parentElement.innerText = event.target.innerText;
    event.target.parentElement.style.visibility = "hidden";
    this.setState({ show: true });
    let { marks, filterqns } = this.state;
    console.log(marks, filterqns);
    filterqns.map(question => {
      if (question._id == _id) {
        return question.correctanswer == ans
          ? this.setState({ marks: marks + 1 })
          : "";
      }
    });
  };

  handleSubmit = () => {
    fetch("http://localhost:3000/api/v1/user/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.quizuserToken
      },
      body: JSON.stringify({
        mark: this.state.marks,
        quizname: this.state.quizname
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          this.props.history.push("/users/${localStorage.quizuserName}/marks");
        }
      });
  };

  render() {
    let { ans, quizname, filterqns, show } = this.state;
    // console.log(ans, quizname, filterqns, show);
    return (
      <div className="quizlist-section">
        <div className="quizlist-heading-section">
          <p className="quizlist-heading">{filterqns.length ? quizname : ""}</p>
        </div>
        {filterqns.length ? (
          filterqns.map((question, index) => (
            <div>
              <div className="quiz-wrapper">
                <div>
                  <p className="question-no">{index + 1}.</p>
                </div>

                <div className="questions">
                  <p className="question-title">{question.title}</p>
                  <div
                    className={`question-answers ${
                      ans ? "correct-answer" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <div>
                {question.answers.map(option => (
                  <div className="answers">
                    <button
                      onClick={event => {
                        this.handleAns(event, question._id, option);
                      }}
                      className="question-answers-item"
                    >
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="quizlist-heading">no question found</p>
        )}
        <h3
          onClick={this.handleSubmit}
          className={`${show ? "quizlist-submit-btn" : ""} `}
        >
          {show ? "SUBMIT" : ""}
        </h3>
      </div>
    );
  }
}

export default withRouter(Showquiz);
