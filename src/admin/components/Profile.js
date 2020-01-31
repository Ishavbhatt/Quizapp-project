import React from "react";

import "../styles/Home.css";
import { getAdmin } from "../../state/actions/admin.action";

import { connect } from "react-redux";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(getAdmin());
  }
  render() {
    let { admin } = this.props;
    return (
      <div className="profile-section">
        <h1 className="profile-head">Your Profile</h1>
        <h3 className="profile-name">{admin && admin.adminname}</h3>
        <p className="profile-email">{admin && admin.adminemail}</p>
      </div>
    );
  }
}

function mapstatetoprops(store) {
  console.log(store.admin.adminDetails);
  return { admin: store.admin.adminDetails };
}

export default connect(mapstatetoprops)(Profile);
