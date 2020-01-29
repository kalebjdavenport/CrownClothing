import { USER_ACTIONS } from "./user.actions.types";

export const setCurrentUser = user => ({
  type: USER_ACTIONS.SET_USER,
  payload: user
});
