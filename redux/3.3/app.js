const createStore = () => {
  let state;
  let handlers = [];

  const setState = (action) => {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  };

  const getState = () => {
    return state;
  };

  const subscribe = (handler) => {
    handlers.push(handler);
  };

  return {
    setState,
    getState,
    subscribe,
  };
};

const worker = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count++ };
    default:
      return { ...state };
  }
};

const store = createStore(worker);

store.subscribe(() => {
  console.log(store.getState());
});

store.setState({ type: "increase" });
