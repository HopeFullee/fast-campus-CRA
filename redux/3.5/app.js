import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import { increase, decrease, reset } from "./actions.js";

const store = createStore(reducer);

store.subscribe(() => {
  console.log("sub =>", store.getState());
});

store.dispatch(increase());
console.log("dis =>", store.getState());
store.dispatch(increase());
console.log("dis =>", store.getState());
store.dispatch(decrease());
console.log("dis =>", store.getState());
store.dispatch(reset());
console.log("dis =>", store.getState());
