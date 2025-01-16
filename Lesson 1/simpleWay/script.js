let state = { count: 0 };

function Increment() {
  //   state.count = state.count + 1 //Mutating
  state = { count: state.count + 1 }; //Not Mutating
}

Increment();
console.log(state);

Increment();
console.log(state);

Increment();
console.log(state);

// --------------------------------------------- Code 01 -----------------------------------------------

let num = {
  number: 0,
  name: "Alex",
  age: 28,
};

function UserInfo() {
  num = { ...num, number: num.number + 1 };
}

UserInfo();
console.log(num);

UserInfo();
console.log(num);

UserInfo();
console.log(num);

// ------------------------------------------------------ Code 02 ---------------------------------------------------

let reduxState = {
  post: 0,
  name: "Denis",
  age: 34,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };

  }
  return state;
}

reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 20 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 5 });
console.log(reduxState);
