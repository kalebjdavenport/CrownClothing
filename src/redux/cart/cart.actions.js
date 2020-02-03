import { ADD_ITEM } from "./cart.actions.types";
import { REMOVE_ITEM } from "./cart.actions.types";
import { REMOVE_UNIT_OF_ITEM } from "./cart.actions.types";

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const removeUnitOfItemFromCart = item => ({
  type: REMOVE_UNIT_OF_ITEM,
  payload: item
});
