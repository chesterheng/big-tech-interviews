// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list

var flatten = function(head) {
  if(!head) return

  let currentNode = head;
  const temp = []
  while(currentNode) {
    if(currentNode.child) {
      currentNode.next && temp.push(currentNode.next);
      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null; 
    }
    currentNode = currentNode.next;
  }
  
  currentNode = head;
  temp.reverse()
  for(const item of temp) {
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = item;
    item.prev = currentNode;
  }

  return head;
};

module.exports = flatten;
