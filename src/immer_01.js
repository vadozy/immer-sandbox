// import produce from 'immer';
const { produce } = require('immer');

const currentState = {
  todos: [42, 43, {}],
  meaning: 42,
};

// eslint-disable-next-line no-unused-vars
const nextState1 = produce(currentState, (draft) => {
  // empty function
});

console.log(nextState1 === currentState); // true

const nextState2 = produce(nextState1, (draft) => {
  // eslint-disable-next-line no-param-reassign
  draft.meaning = 43;
  draft.meaning2 = 'bummer';
});

console.log(nextState1 === nextState2); // false
console.log(nextState1.todos === nextState2.todos); // true
