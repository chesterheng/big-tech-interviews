// https://leetcode.com/problems/linked-list-cycle-ii

var detectCycle = function(head) {
  if(!head) return null;

  let currentNode = head;
  const seenNodes = new Set();
  while(!seenNodes.has(currentNode)){
    if(!currentNode.next) return null;
    
    seenNodes.add(currentNode)
    currentNode = currentNode.next
  }
  return currentNode;
};

module.exports = detectCycle;

// const findCycle = function(head) {
//   if(!head) return null;
  
//   let tortoise = head, hare = head;
  
//   while(true) {
//     tortoise = tortoise.next;
//     hare = hare.next;
    
//     if(hare === null || hare.next === null) {
//       return null;
//     } else {
//       hare = hare.next;
//     }
    
//     if(tortoise === hare) break;
//   }
  
//   let p1 = head,
//       p2 = tortoise;
  
//   while(p1 !== p2) {
//     p1 = p1.next;
//     p2 = p2.next;
//   }
  
//   return p2
// };