import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import { increase, decrease, reset } from "./actions.js";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(reset());
