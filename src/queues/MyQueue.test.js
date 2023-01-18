const MyQueue = require('./MyQueue');

test('MyQueue', () => {
  const myQueue = new MyQueue();
  myQueue.push(1);
  expect(myQueue.stackIn).toEqual([1]);
  expect(myQueue.stackOut).toEqual([]);

  myQueue.push(2);
  expect(myQueue.stackIn).toEqual([1, 2]);
  expect(myQueue.stackOut).toEqual([]);
  
  expect(myQueue.peek()).toBe(1);
  expect(myQueue.stackIn).toEqual([]);
  expect(myQueue.stackOut).toEqual([2, 1]);

  expect(myQueue.pop()).toBe(1);
  expect(myQueue.stackIn).toEqual([]);
  expect(myQueue.stackOut).toEqual([2]);

  expect(myQueue.pop()).toBe(2);
  expect(myQueue.stackIn).toEqual([]);
  expect(myQueue.stackOut).toEqual([]);

  expect(myQueue.empty()).toBe(true);

  myQueue.push(1);
  expect(myQueue.stackIn).toEqual([1]);
  expect(myQueue.stackOut).toEqual([]);

  myQueue.push(8);
  expect(myQueue.stackIn).toEqual([1, 8]);
  expect(myQueue.stackOut).toEqual([]);

  expect(myQueue.pop()).toBe(1);
  expect(myQueue.stackIn).toEqual([]);
  expect(myQueue.stackOut).toEqual([8]);

  myQueue.push(3);
  expect(myQueue.stackIn).toEqual([3]);
  expect(myQueue.stackOut).toEqual([8]);

  expect(myQueue.peek()).toBe(8);
  expect(myQueue.stackIn).toEqual([3]);
  expect(myQueue.stackOut).toEqual([8]);

  myQueue.push(5);
  expect(myQueue.stackIn).toEqual([3, 5]);
  expect(myQueue.stackOut).toEqual([8]);

  expect(myQueue.pop()).toBe(8);
  expect(myQueue.stackIn).toEqual([3, 5]);
  expect(myQueue.stackOut).toEqual([]);

  expect(myQueue.pop()).toBe(3);
  expect(myQueue.stackIn).toEqual([]);
  expect(myQueue.stackOut).toEqual([5]);

  expect(myQueue.empty()).toBe(false);
});