export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});

export const createStore = (reducer) => {
  let state;
  let handlers = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  };

  const getState = () => {
    return state;
  };

  const subscribe = (handler) => {
    handlers.push(handler);
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};
