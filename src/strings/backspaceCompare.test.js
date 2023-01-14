const backspaceCompare = require('./backspaceCompare');

test('backspaceCompare', () => {
  expect(backspaceCompare("ab#c","ad#c")).toBe(true);
  expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  expect(backspaceCompare("a##c", "#a#c")).toBe(true);
  expect(backspaceCompare("a#c", "b")).toBe(false);
});
