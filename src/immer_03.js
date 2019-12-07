// import produce from 'immer';
const { produce } = require('immer');

const set = new Set();
set.add({ text: 'todo #1', done: false });
set.add({ text: 'todo #2', done: false });

const todos = [
  { text: 'todo #1', done: false },
  { text: 'todo #2', done: false },
];

const state01 = {
  set,
  todos,
};

const state02 = produce(state01, (draft) => {
  draft.todos.push({ text: 'learn immer', done: true });
  draft.todos[1].done = true;
  // draft.set.add({ text: 'todo #3', done: true });
  // console.log(draft.set.size);
  draft.set.values().next().value.text = 'qqq';
});

// old state is unmodified
console.log('Old State');
console.log(state01.todos.length); // 2
console.log(state01.todos[1].done); // false

// new state reflects the draft
console.log('New State');
console.log(state02.todos.length); // 3
console.log(state02.todos[1].done); // true

// structural sharing
console.log('Structural Sharing');
console.log(state01 === state02); // false
console.log(state01.todos[0] === state02.todos[0]); // true
console.log(state01.todos[1] === state02.todos[1]); // false
console.log(state01.set === state02.set); // true or false, depending if the set changed
