import { createStore } from "redux";

//redux used to manage complex states of application

//Action generators using destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy
  };
};

const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count
  };
};

const resetCount = () => {
  return {
    type: "RESET"
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };

    default:
      return state;
  }
});

//to watch for changes in the redux store
store.subscribe(() => {
  console.log(store.getState());
});

//increment
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

// // by a cretain number
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
