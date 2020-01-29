import { USER_ACTIONS } from "./user.actions.types";

const InitialState = {
  currentUser: null
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
