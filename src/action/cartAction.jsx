import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes/actionTypes";
import { ADD_PRODUCTS } from "../actionTypes/actionTypes";
import { REMOVE_PRODUCTS } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    state: product,
  };
};

const removeProducts = (product) => {
  return {
    type: REMOVE_PRODUCTS,
    state: product,
  };
};

const removeItem = (product) => {
  return {
    type: REMOVE_ITEM,
    state: product,
  };
};

export { addItem, addProducts, removeProducts, removeItem };
