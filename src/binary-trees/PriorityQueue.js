class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  peek() {
    return this._heap[0];
  }

  show() {
    return this._heap;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();
    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (nodeIdx > 0) {
      const parentIndex = this._parent(nodeIdx);

      if (this._compare(nodeIdx, parentIndex)) {
        this._swap(nodeIdx, parentIndex);
        nodeIdx = parentIndex;
      } else {
        break;
      }
    }
  }

  // _siftUp() {
  //   let nodeIdx = this.size() - 1;

  //   while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
  //     this._swap(nodeIdx, this._parent(nodeIdx));
  //     nodeIdx = this._parent(nodeIdx);
  //   }
  // }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (nodeIdx < this.size()) {
      let leftChildIndex = this._leftChild(nodeIdx);
      let rightChildIndex = this._rightChild(nodeIdx);
      let largerChildIndex = nodeIdx;

      if (
        leftChildIndex < this.size() &&
        this._compare(leftChildIndex, largerChildIndex)
      ) {
        largerChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this._compare(rightChildIndex, largerChildIndex)
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (largerChildIndex !== nodeIdx) {
        this._swap(nodeIdx, largerChildIndex);
        nodeIdx = largerChildIndex;
      } else {
        break;
      }
    }
  }

  // _siftDown() {
  //   let nodeIdx = 0;

  //   while (
  //     (this._leftChild(nodeIdx) < this.size() &&
  //       this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
  //     (this._rightChild(nodeIdx) < this.size() &&
  //       this._compare(this._rightChild(nodeIdx), nodeIdx))
  //   ) {
  //     const greaterChildIdx =
  //       this._rightChild(nodeIdx) < this.size() &&
  //       this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
  //         ? this._rightChild(nodeIdx)
  //         : this._leftChild(nodeIdx);

  //     this._swap(greaterChildIdx, nodeIdx);
  //     nodeIdx = greaterChildIdx;
  //   }
  // }
}

module.exports = PriorityQueue;
