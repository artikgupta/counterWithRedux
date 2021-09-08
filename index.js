let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let five = document.querySelector(".five");
let ten = document.querySelector(".ten");
let fifteen = document.querySelector(".fifteen");
let max_fifteen = document.querySelector(".max_fifteen");
let max_hundred = document.querySelector(".max_hundred");
let max_twoHundred = document.querySelector(".max_twoHundred");
let h1 = document.querySelector("h1");

let initialState = {
  counter: 0,
  step: 1,
  maxValue: Infinity,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + state.step };
    case "DEC":
      return { ...state, counter: state.counter - state.step };
    case "RESET":
      return { ...state, counter: 0 };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "SET_MAX":
      return { ...state, maxValue: action.payload };
    default:
      return state;
  }
}

let store = Redux.createStore(reducer);
let state = store.getState(); // getState() return a new current state

five.addEventListener("click", () => {
  store.dispatch({ type: "SET_STEP", payload: 5 });
});

ten.addEventListener("click", () => {
  store.dispatch({ type: "SET_STEP", payload: 10 });
});

fifteen.addEventListener("click", () => {
  store.dispatch({ type: "SET_STEP", payload: 15 });
});

max_fifteen.addEventListener("click", () => {
  store.dispatch({ type: "SET_MAX", payload: 15 });
});
max_hundred.addEventListener("click", () => {
  store.dispatch({ type: "SET_MAX", payload: 100 });
});
max_twoHundred.addEventListener("click", () => {
  store.dispatch({ type: "SET_MAX", payload: 200 });
});

//dispatch call the reducer with an action pass to a dispatch which is an object
increment.addEventListener("click", () => {
  const currentState = store.getState();
  console.log(currentState, "state before inc");
  if (currentState.counter + currentState.step > currentState.maxValue) return;
  store.dispatch({ type: "INC" });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "DEC" });
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});

function createUI() {
  console.log(store.getState());
  h1.innerText = store.getState().counter;
}

store.subscribe(createUI);

console.log(state);
