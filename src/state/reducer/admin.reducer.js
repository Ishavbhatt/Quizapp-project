import { GET_QUIZZES, GET_ADMIN } from "../types";

let initialstate = {
  admin: ""
};

export default function admin(state = initialstate, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        adminDetails: action.payload
      };

    default:
      return { ...state };
  }
}
