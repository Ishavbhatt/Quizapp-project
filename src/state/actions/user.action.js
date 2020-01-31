import { GET_USER } from "../types";

export function Showuser(payload) {
  return { type: GET_USER, payload };
}

export function getUser() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.quizuserToken
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch(Showuser(data.user));
      });
  };
}
