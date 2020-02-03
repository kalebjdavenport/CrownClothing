import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_UNIT_OF_ITEM
} from "./cart.actions.types";
import { addItemToCart, removeUnitOfItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case REMOVE_UNIT_OF_ITEM:
      console.log(state.cartItems);
      return {
        ...state,
        cartItems: removeUnitOfItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
