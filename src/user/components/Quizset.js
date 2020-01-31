import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Quiz.css";

class Quizset extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: "",
      quizsetArr: [],
      quizsetName: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/quizzes")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ questions: data.questions });
        this.state.questions.map(question =>
          this.setState({
            quizsetArr: this.state.quizsetArr.concat(question.quizset)
          })
        );
        this.setState({ quizsetName: [...new Set(this.state.quizsetArr)] });
      });
  }

  render() {
    let { quizsetName } = this.state;

    return (
      <>
        <div className="quizsets-list-wrapper">
          <h3>Which type of question you start the quiz:</h3>
          <div className="quizsets-list">
            {quizsetName &&
              quizsetName.map(quizset => (
                <NavLink
                  className="quizset-text"
                  to={`/users/${localStorage.quizusername}/quizsets/${quizset}`}
                >
                  {quizset}
                </NavLink>
              ))}
          </div>
        </div>
      </>
    );
  }
}
export default Quizset;
