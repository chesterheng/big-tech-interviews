const { ListNode, printList } = require("../utils/singly-linked-list");
const reverseList = require("./reverse");

test("reverse", () => {
  const initialValue = null;
  const numberArray = [...Array(5)].map((_, index) => index + 1).reverse();
  const head = numberArray.reduce(
    (accumulator, currentValue) => new ListNode(currentValue, accumulator),
    initialValue
  );
  expect(printList(head)).toEqual([1, 2, 3, 4, 5]);

  const reversedHead = reverseList(head);
  expect(printList(reversedHead)).toEqual([5, 4, 3, 2, 1]);
});

// let head = new ListNode(1);
// let second = new ListNode(2);
// let third = new ListNode(3);
// let fourth = new ListNode(4);
// let fifth = new ListNode(5);

// head.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;
