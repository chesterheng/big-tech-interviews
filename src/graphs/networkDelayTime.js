// https://leetcode.com/problems/network-delay-time/

const PriorityQueue = require("../binary-trees/PriorityQueue");

// dijkstra's algorithm
var networkDelayTimeDA = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  const adjacencyList = new Array(n).fill(0).map(() => []);
  distances[k - 1] = 0;

  // min heap
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);

  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjacencyList[source - 1].push([target - 1, weight]);
  }

  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();
    const connections = adjacencyList[currentVertex];

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      const targetVertex = connection[0];
      const weight = connection[1];
      if (distances[currentVertex] + weight < distances[targetVertex]) {
        distances[targetVertex] = distances[currentVertex] + weight;
        heap.push(targetVertex);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

// bellman-ford algorithm
var networkDelayTimeBFA = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);

  distances[k - 1] = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }
    if (count === 0) break;
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

module.exports = { networkDelayTimeDA, networkDelayTimeBFA };
