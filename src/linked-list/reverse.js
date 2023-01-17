function reverseList(head) {
  let currentNode = head;
  let previousNode = null;
  let nextNode = null;
  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

module.exports = reverseList;
