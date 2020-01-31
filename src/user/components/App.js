import React from "react";
import { Route, Switch } from "react-router-dom";

import Firstpage from "../../Firstpage";

import Signup from "./Signup";
import Signin from "./Signin";
import Header from "./Header";
import Home from "./Home";
import Showquiz from "./Showquiz";
import Quizset from "./Quizset";
import Showmarks from "./Showmarks";
import Profile from "./Profile";
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
          <Route exact path="/users">
            <Header handleIslogged={this.handleIslogged} />
            <Home />
          </Route>

          <Route exact path="/users/signup">
            <Header handleIslogged={this.handleIslogged} />
            <Signup />
          </Route>
          <Route exact path="/users/signin">
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
          <Route exact path="/users">
            <Header handleIslogged={this.handleIslogged} />
            <Home />
          </Route>
          <Route exact path="/users/:username/quizsets">
            <Header handleIslogged={this.handleIslogged} />
            <Quizset />
          </Route>
          <Route exact path="/users/:username/myprofile">
            <Header handleIslogged={this.handleIslogged} />
            <Profile />
          </Route>

          <Route exact path="/users/:username/quizsets/:quizname">
            <Header handleIslogged={this.handleIslogged} />
            <Showquiz />
          </Route>
          <Route exact path="/users/:username/marks">
            <Header handleIslogged={this.handleIslogged} />
            <Showmarks />
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
        {localStorage.quizuserToken
          ? this.PrivateRoutes()
          : this.PublicRoutes()}
      </div>
    );
  }
}
export default App;
