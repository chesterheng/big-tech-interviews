const PriorityQueue = require("./PriorityQueue");

test("PriorityQueue", () => {
  const pq = new PriorityQueue();
  pq.size();
  pq.isEmpty();

  pq.push(50);
  pq.push(40);
  pq.push(25);
  pq.push(20);
  pq.push(35);
  pq.push(10);
  pq.push(15);
  expect(pq.show()).toEqual([50, 40, 25, 20, 35, 10, 15]);
  pq.push(45);
  expect(pq.show()).toEqual([50, 45, 25, 40, 35, 10, 15, 20]);
  pq.push(75);
  expect(pq.show()).toEqual([75, 50, 25, 45, 35, 10, 15, 20, 40]);
  pq.peek();

  pq.pop();
  expect(pq.show()).toEqual([50, 45, 25, 40, 35, 10, 15, 20]);
  pq.pop();
  expect(pq.show()).toEqual([45, 40, 25, 20, 35, 10, 15]);
  pq.pop();
  expect(pq.show()).toEqual([40, 35, 25, 20, 15, 10]);
});
