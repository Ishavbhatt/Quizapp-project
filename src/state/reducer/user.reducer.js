import { GET_USER } from "../types";

let initialstate = {
  user: ""
};

export default function user(state = initialstate, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return { ...state };
  }
}
