const MaxHeap = require("./MaxHeap");

test("MaxHeap", () => {
  const heap = new MaxHeap();

  heap.insert(50);
  heap.insert(40);
  heap.insert(25);
  heap.insert(20);
  heap.insert(35);
  heap.insert(10);
  heap.insert(15);
  expect(heap.heap).toEqual([50, 40, 25, 20, 35, 10, 15]);
  heap.insert(45);
  expect(heap.heap).toEqual([50, 45, 25, 40, 35, 10, 15, 20]);
  heap.insert(75);
  expect(heap.heap).toEqual([75, 50, 25, 45, 35, 10, 15, 20, 40]);

  expect(heap.remove()).toBe(75);
  expect(heap.heap).toEqual([50, 45, 25, 40, 35, 10, 15, 20]);
  expect(heap.remove()).toBe(50);
  expect(heap.heap).toEqual([45, 40, 25, 20, 35, 10, 15]);
  expect(heap.remove()).toBe(45);
  expect(heap.heap).toEqual([40, 35, 25, 20, 15, 10]);
});
