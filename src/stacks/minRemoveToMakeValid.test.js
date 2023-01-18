const minRemoveToMakeValid = require('./minRemoveToMakeValid');

test('minRemoveToMakeValid', () => {
  expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
  expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
  expect(minRemoveToMakeValid("))((")).toBe("");
  expect(minRemoveToMakeValid("(ab(cd)")).toBe("ab(cd)");
});