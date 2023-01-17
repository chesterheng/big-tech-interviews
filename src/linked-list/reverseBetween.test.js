const { ListNode, printList } = require("../utils/singly-linked-list");
const reverseBetween = require("./reverseBetween");

test("reverseBetween", () => {
  const initialValue = null;
  let numberArray = [1, 2, 3, 4, 5].reverse();
  let head = numberArray.reduce(
    (accumulator, currentValue) => new ListNode(currentValue, accumulator),
    initialValue
  );
  expect(printList(reverseBetween(head, 2, 4))).toEqual([1, 4, 3, 2, 5]);

  numberArray = [5].reverse();
  head = numberArray.reduce(
    (accumulator, currentValue) => new ListNode(currentValue, accumulator),
    initialValue
  );
  expect(printList(reverseBetween(head, 1, 1))).toEqual([5]);

  numberArray = [3, 5].reverse();
  head = numberArray.reduce(
    (accumulator, currentValue) => new ListNode(currentValue, accumulator),
    initialValue
  );
  expect(printList(reverseBetween(head, 1, 2))).toEqual([5, 3]);
});
