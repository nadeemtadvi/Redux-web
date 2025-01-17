import { createStore } from "redux";
import { myCreatstore } from "./myRedux";
const postElem = document.querySelector(".post");
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);
// console.log(store.getState());

const myStore = myCreatstore(reducer)
console.log(myStore);

const unsubscribe = myStore.subscribe(() => {
  console.log(myStore.getState());
  postElem.innerText = myStore.getState().post;
});

postElem.innerText = myStore.getState().post;

myStore.dispatch({ type: INCREMENT });
// console.log(myStore.getState());
myStore.dispatch({ type: DECREMENT });
// console.log(myStore.getState());
myStore.dispatch({ type: INCREASE_BY, payload: 10 });
myStore.dispatch({ type: DECREASE_BY, payload: 7 });


postElem.addEventListener('click', () => {
  myStore.dispatch({ type: INCREMENT });
})






