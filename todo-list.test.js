const todos = [
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: true },
  { id: 3, text: 'Task 3', completed: false }
];

// Test case for finding an existing todo
test('Find existing todo by id', () => {
  const id = 2;
  const index = todos.findIndex(todo => todo.id === id);
  expect(index).toBe(1);
});

// Test case for finding a non-existing todo
test('Find non-existing todo by id', () => {
  const id = 4;
  const index = todos.findIndex(todo => todo.id === id);
  expect(index).toBe(-1);
});