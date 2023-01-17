class ListNode
{
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// function ListNode(value = 0, next = null) {
//   this.value = value;
//   this.next = next;
// }

function printList(head) {
  let currentNode = head;
  let result = [];
  while(currentNode) {
    result.push(currentNode.val)
    currentNode = currentNode.next;
  }
  return result;
  // return result.join(' => ');
}

// const printList = (head) => {
//   if(!head) {
//     return;
//   }

//   console.log(head.val);
//   printList(head.next);
// }

function cycleLinkedList(head, val) {
  let currentNode = head;
  let cycleNode = null;
  while(currentNode.next) {
    if(currentNode.val === val) {
      cycleNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = cycleNode;
}

module.exports = { ListNode, printList, cycleLinkedList }
