// https://leetcode.com/problems/reverse-linked-list-ii/

var reverseBetween = function(head, left, right) {
  let currentNode = head;
  let beforeLeftNode = null;
  let leftNode = null;
  let rightNode = null;
  let afterRightNode = null;
  let currentPos = 1;
  
  while(currentNode) {
    if(left - 1 >= 1 && currentPos === left - 1)  beforeLeftNode = currentNode;
    else if(currentPos === left)                  leftNode = currentNode;
    if(currentPos === right)  rightNode = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  if(beforeLeftNode) beforeLeftNode.next = null;
  afterRightNode = rightNode.next;
  rightNode.next = null;
  
  let previousNode = null;
  let nextNode = null;
  currentNode = leftNode;
  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  if(beforeLeftNode) beforeLeftNode.next = rightNode;
  else head = rightNode;
  leftNode.next = afterRightNode;
  
  return head;
};

module.exports = reverseBetween;

// var reverseBetween = function(head, m, n) {
//   let currentPos = 1, currentNode = head;
//   let start = head;
  
//   while(currentPos < m) {
//     start = currentNode;
//     currentNode = currentNode.next;
//     currentPos++;
//   }
  
//   let newList = null, tail = currentNode;
  
//   while(currentPos >= m && currentPos <= n) {
//     const next = currentNode.next;
//     currentNode.next = newList;
//     newList = currentNode;
//     currentNode = next;
//     currentPos++;
//   }
  
//   start.next = newList;
//   tail.next = currentNode;
  
//   if(m > 1) {
//     return head
//   } else {
//     return newList;
//   }
// };