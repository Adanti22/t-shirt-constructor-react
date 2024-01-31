import { createStore } from "redux";
const defaultState = {
  basket: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, basket: [...state.basket, action.payload] };
    case "DELETE_ITEM":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
