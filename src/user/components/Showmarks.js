import React from "react";
import { getUser } from "../../state/actions/user.action";

import "../styles/Showquiz.css";
import { connect } from "react-redux";

class Showmarks extends React.Component {
  constructor() {
    super();
    this.state = {
      totalmarks: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(getUser());
  }
  render() {
    let { totalmarks } = this.props;
    return (
      <>
        <div className="showmarks-section">
          {totalmarks && totalmarks.length ? (
            <div>
              <p>All MArks</p>
              {totalmarks.map((marks, index) => (
                <div className="marks">
                  <p>{index + 1}.</p>
                  <h3 className="quizsetname-marks">{marks.quizname},</h3>
                  <h3 className="quiz-marks">
                    {marks.mark}
                    <span className="marks-span"> marks</span>
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <p>No Marks Appeared</p>
          )}
        </div>
      </>
    );
  }
}
function mapstatetoprops(store) {
  console.log(store);
  return { totalmarks: store.user.marks };
}

export default connect(mapstatetoprops)(Showmarks);
