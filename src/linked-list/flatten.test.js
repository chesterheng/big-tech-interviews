const { ListNode, buildMultiLevel } = require("../utils/doubly-linked-list");
const { printList } = require("../utils/singly-linked-list");
const flatten = require("./flatten");

test("flatten", () => {
  let nodes = [1, 2, 3, [7, 8, [11, 12],  9, 10], 4, 5, 6];
  let multiLinkedList = buildMultiLevel(nodes);
  let flattenLinkedList = flatten(multiLinkedList);
  expect(printList(flattenLinkedList)).toEqual([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]);

  nodes = [1, [3], 2]
  multiLinkedList = buildMultiLevel(nodes);
  flattenLinkedList = flatten(multiLinkedList);
  expect(printList(flattenLinkedList)).toEqual([1, 3, 2]);

  nodes = []
  multiLinkedList = buildMultiLevel(nodes);
  flattenLinkedList = flatten(multiLinkedList);
  expect(printList(flattenLinkedList)).toEqual([]);

  nodes = [1, [2, [3]]]
  multiLinkedList = buildMultiLevel(nodes);
  flattenLinkedList = flatten(multiLinkedList);
  expect(printList(flattenLinkedList)).toEqual([1, 2, 3]);
});
