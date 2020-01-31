import React from "react";

import { getUser } from "../../state/actions/user.action";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(getUser());
  }
  render() {
    let { user } = this.props;
    return (
      <div className="profile-section">
        <h1 className="profile-head">Your profile</h1>
        <h3 className="profile-name">{user && user.username}</h3>
        <p className="profile-name">{user && user.email}</p>
      </div>
    );
  }
}

function mapstatetoprops(store) {
  console.log(store);
  return { user: store.user.userDetails };
}

export default connect(mapstatetoprops)(Profile);
