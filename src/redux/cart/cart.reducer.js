import { ADD_ITEM } from "./cart.actions.types";
import { addItemToCart } from "./cart.utils";

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
    default:
      return state;
  }
};
