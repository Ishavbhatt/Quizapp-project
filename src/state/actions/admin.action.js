import { GET_ADMIN } from "../types";

export function getadmin(payload) {
  return { type: GET_ADMIN, payload };
}

export function getAdmin() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.quizAdminToken
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(getadmin(data.admin));
      });
  };
}
