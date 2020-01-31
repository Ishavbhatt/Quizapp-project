import React from "react";
import { Route, Switch } from "react-router-dom";

import Firstpage from "../../Firstpage";
import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
// import Quizset from "./Quizset";
import Createquiz from "./Createquiz";
// import Showmarks from "./Showmarks";
import Notfound from "./Notfound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false
    };
  }

  handleIslogged = value => {
    this.setState({ islogged: value });
  };

  PublicRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/admins">
            <Header handleIslogged={this.handleIslogged} />
            <Home />
          </Route>
          <Route exact path="/admins/signup">
            <Header handleIslogged={this.handleIslogged} />
            <Signup />
          </Route>
          <Route exact path="/admins/signin">
            <Header handleIslogged={this.handleIslogged} />
            <Signin handleIslogged={this.handleIslogged} />
          </Route>
          {/* <Route exact path="/*">
            <Notfound />
          </Route> */}
        </Switch>
      </>
    );
  }
  PrivateRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/admins">
            <Header handleIslogged={this.handleIslogged} />
            <Home />
          </Route>

          <Route exact path="/admins/:adminname/createquiz">
            <Header handleIslogged={this.handleIslogged} />
            <Createquiz />
          </Route>
          <Route exact path="/admins/:adminname/profile">
            <Header handleIslogged={this.handleIslogged} />
            <Profile />
          </Route>

          {/* <Route exact path="/*">
            <Notfound />
          </Route> */}
        </Switch>
      </>
    );
  }

  render() {
    return (
      <div className="whole-app">
        {localStorage.quizAdminToken
          ? this.PrivateRoutes()
          : this.PublicRoutes()}
      </div>
    );
  }
}
export default App;
