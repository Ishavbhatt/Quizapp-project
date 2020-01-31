import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "../styles/Quiz.css";

class Createquiz extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answers: [],
      correctanswer: "",
      quizset: ""
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    let { option1, option2, option3, option4 } = this.state;
    let options = [option1, option2, option3, option4];
    this.setState({ answers: options });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/quizzes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.quizAdminToken
      },
      body: JSON.stringify({
        title: this.state.title,
        answers: this.state.answers,
        correctanswer: this.state.correctanswer,
        quizset: this.state.quizset
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("api data", data);
        if (data._id) {
          alert("Quiz is Successfully Created");
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className="sign-wrapper">
        <div className="sign-section">
          <form className="sign-form">
            Question: <br />
            <input
              className="sign-input first-input"
              type="text"
              name="title"
              placeholder="Enter Your Question"
              value={this.state.title}
              onChange={this.handleChange}
            />
            {/* // options // */}
            <div className="create-options">
              Options: <br />
              <input
                className="sign-input"
                type="text"
                name="option1"
                placeholder="First Option"
                value={this.state.option1}
                onChange={this.handleChange}
              />
              <input
                className="sign-input"
                type="text"
                name="option2"
                placeholder="Secound Option"
                value={this.state.option2}
                onChange={this.handleChange}
              />
              <input
                className="sign-input"
                type="text"
                name="option3"
                placeholder="Third Option"
                value={this.state.option3}
                onChange={this.handleChange}
              />
              <input
                className="sign-input"
                type="text"
                name="option4"
                placeholder="Fourth Option"
                value={this.state.option4}
                onChange={this.handleChange}
              />
              <br></br>
              Correct answer: <br />
              <input
                className="sign-input"
                type="text"
                name="correctanswer"
                placeholder="Correct Answer"
                value={this.state.correctanswer}
                onChange={this.handleChange}
              />
              <br></br>
              Quizset Name: <br />
              <input
                className="sign-input"
                type="text"
                name="quizset"
                placeholder="Question Type"
                value={this.state.quizset}
                onChange={this.handleChange}
              />
              <br></br>
              <input
                className="create-btn"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Createquiz);
