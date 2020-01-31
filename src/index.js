import React from "react";
import { render } from "react-dom";
import Admin from "./admin/components/App";
import User from "./user/components/App";
import Firstpage from "./Firstpage";
import store from "./state/store";

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Route exact path="/">
      <Firstpage />
    </Route>
  );
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <User />
      <Admin />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
