import { INCREASE, DECREASE, RESET } from "./action-type.js";

const initializeState = { count: 0 };

export const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
};
