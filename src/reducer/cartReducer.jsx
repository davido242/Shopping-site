import React from "react";
import { ADD_ITEM } from "../actionTypes/actionTypes";
import { ADD_PRODUCTS } from "../actionTypes/actionTypes";
import { REMOVE_PRODUCTS } from "../actionTypes/actionTypes";
import { REMOVE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    default:
      return state;
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      if (state.cart.length == 0) {
        action.state.cartQty += 1;

        return {
          ...state,
          cart: [action.state],
        };
      } else {
        const selectedCartProducts = state?.cart?.filter(
          (cart) => cart.id === action.state.id
        );
        console.log(selectedCartProducts, "llllllll");
        console.log(action.state, "1234566");

        if (selectedCartProducts.length == 0) {
          // if items doesn't exist in the cart, add the object to the cart and increase the cartQty by 1
          action.state.cartQty += 1;
          return {
            ...state,
            cart: [...state.cart, action.state],
          };
        } else {
          // If item exists in the cart, increase the cartQty by 1;

          const cartState = JSON.parse(JSON.stringify(state.cart));
          const newCart = cartState.map((item) => {
            if (item.id === action.state.id) {
              item.cartQty += 1;
            }
            return item;
          });
          console.log(newCart, "uuuuuuuu");

          return {
            ...state,
            cart: newCart,
          };
        }
      }

    case REMOVE_PRODUCTS:
      const remainingItems = state.cart.filter(
        (incart) => incart.id != action.state
      );
      console.log(remainingItems, "&HHHHHHHHHH");

      return {
        ...state,
        cart: remainingItems,
      };

    case REMOVE_ITEM:
      const cartState = JSON.parse(JSON.stringify(state.cart));
      const newCart = cartState.map((item) => {
        if (item.id === action.state.id) {
          item.cartQty -= 1;
        }
        return item;
      });

      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export { cartReducer, productReducer };
