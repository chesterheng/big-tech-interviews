class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // O(logN)
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  // O(logN)
  remove() {
    if (this.heap.length > 1) {
      [this.heap[0], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[0],
      ];
    }

    const poppedValue = this.heap.pop();
    this.heapifyDown();
    return poppedValue;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }

    // while (index > 0) {
    //   const parentIndex = Math.floor((index - 1) / 2);
    //   if (this.heap[index] > this.heap[parentIndex]) {
    //     [this.heap[index], this.heap[parentIndex]] = [
    //       this.heap[parentIndex],
    //       this.heap[index],
    //     ];
    //     index = parentIndex;
    //   } else {
    //     break;
    //   }
    // }
  }

  heapifyDown() {
    let index = 0;
    while (index < this.heap.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largerChildIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (largerChildIndex !== index) {
        [this.heap[index], this.heap[largerChildIndex]] = [
          this.heap[largerChildIndex],
          this.heap[index],
        ];
        index = largerChildIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = MaxHeap;
