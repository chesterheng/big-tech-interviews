const { ListNode, cycleLinkedList } = require("../utils/singly-linked-list");
const detectCycle = require("./detectCycle");

test("flatten", () => {
  let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
  let head = arrayNumber.reduce((acc, val) => new ListNode(val, acc), null);
  cycleLinkedList(head, 3)
  expect(detectCycle(head).val).toBe(3);

  arrayNumber = [3, 2, 0, -4].reverse();
  head = arrayNumber.reduce((acc, val) => new ListNode(val, acc), null);
  cycleLinkedList(head, 2)
  expect(detectCycle(head).val).toBe(2);

  arrayNumber = [1, 2].reverse();
  head = arrayNumber.reduce((acc, val) => new ListNode(val, acc), null);
  cycleLinkedList(head, 1)
  expect(detectCycle(head).val).toBe(1);

  arrayNumber = [1].reverse();
  head = arrayNumber.reduce((acc, val) => new ListNode(val, acc), null);
  expect(detectCycle(head)).toBe(null);
});
