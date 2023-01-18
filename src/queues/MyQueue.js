// https://leetcode.com/problems/implement-queue-using-stacks

var MyQueue = function() {
  this.stackIn = [];
  this.stackOut = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x);   
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(!this.stackOut.length) {
    while(this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
  }
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(!this.stackOut.length) {
    while(this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
  }
  return this.stackOut.at(-1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length;       
};

module.exports = MyQueue;

// class QueueWithStacks {
//   constructor() {
//     this.in = [];
//     this.out = [];
//   }

//   enqueue(val) {
//     this.in.push(val);
//   }

//   dequeue() {
//     if (this.out.length === 0) {
//       while(this.in.length > 0) {
//         this.out.push(this.in.pop());
//       }
//     }
    
//     return this.out.pop();
//   }

//   peek() {
//     if (this.out.length === 0) {
//         while(this.in.length > 0) {
//             this.out.push(this.in.pop());
//         }
//     }
    
//     return this.out[this.out.length - 1];
//   }

//   empty() {
//     return this.in.length === 0 && this.out.length === 0;
//   }
// };