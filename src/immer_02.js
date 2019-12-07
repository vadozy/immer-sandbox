// import produce from 'immer';
const { produce } = require('immer');

const todos = [
  { text: 'todo #1', done: false },
  { text: 'todo #2', done: false },
];

const nextTodos = produce(todos, (draft) => {
  draft.push({ text: 'learn immer', done: true });
  draft[1].done = true;
});

// old state is unmodified
console.log('Old State');
console.log(todos.length); // 2
console.log(todos[1].done); // false

// new state reflects the draft
console.log('New State');
console.log(nextTodos.length); // 3
console.log(nextTodos[1].done); // true

// structural sharing
console.log('Structural Sharing');
console.log(todos === nextTodos); // false
console.log(todos[0] === nextTodos[0]); // true
console.log(todos[1] === nextTodos[1]); // false
