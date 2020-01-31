import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/combine.reducer";

let createthunk = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(createthunk));
export default store;
