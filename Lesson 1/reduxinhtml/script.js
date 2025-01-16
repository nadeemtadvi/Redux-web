import { createStore } from "redux";

// console.log(createStore);
// console.dir(createStore);

const initialState = {
  post: 0,
  name: "Denis",
  age: 34,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/incrementBy";
const DECREASE_BY = "post/decrementBy";

function reducer(state = initialState, action) {
  // if (action.type === INCREMENT) {
  //   return { ...state, post: state.post + 1 };
  // } else if (action.type === DECREMENT) {
  //   return { ...state, post: state.post - 1 };
  // } else if (action.type === INCREASE_BY) {
  //   return { ...state, post: state.post + action.payload };
  // } else if (action.type === DECREASE_BY) {
  //   return { ...state, post: state.post - action.payload };
  // }
  // return state;

  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
// console.log(store.getState());
store.dispatch({ type: DECREMENT });
// console.log(store.getState());
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 7 });
