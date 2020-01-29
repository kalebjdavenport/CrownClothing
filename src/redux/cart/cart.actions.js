import { ADD_ITEM } from "./cart.actions.types";

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
