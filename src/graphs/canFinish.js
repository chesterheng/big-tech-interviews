// https://leetcode.com/problems/course-schedule/

var canFinishBFS = function (numCourses, prerequisites) {
  // represent graph as an adjacency list
  const adjacencyList = new Array(numCourses).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const prerequisite = prerequisites[i];
    const startVertex = prerequisite[1];
    const endVertex = prerequisite[0];
    adjacencyList[startVertex].push(endVertex);
  }

  // unconnected? possible
  // BFS traversal for all vertices
  for (let v = 0; v < numCourses; v++) {
    const seen = {};
    const queue = [];
    for (let i = 0; i < adjacencyList[v].length; i++) {
      queue.push(adjacencyList[v][i]);
    }

    while (queue.length) {
      const currentVertex = queue.shift();
      seen[currentVertex] = true;

      // check for cycle
      if (currentVertex === v) return false;

      const connections = adjacencyList[currentVertex];
      for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if (!seen[connection]) {
          queue.push(connection);
        }
      }
    }
  }
  return true;
};

var canFinishTSwithAL = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adjacencyList = inDegree.map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const prerequisite = prerequisites[i];
    const startVertex = prerequisite[1];
    const endVertex = prerequisite[0];
    inDegree[endVertex]++;
    adjacencyList[startVertex].push(endVertex);
  }

  const stack = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let countVertexWithZeroIndegree = 0;
  while (stack.length) {
    const currentVertex = stack.pop();
    countVertexWithZeroIndegree++;

    const connections = adjacencyList[currentVertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      inDegree[connection]--;
      if (inDegree[connection] === 0) {
        stack.push(connection);
      }
    }
  }

  return countVertexWithZeroIndegree === numCourses;
};

const canFinishTS = function (n, prerequisites) {
  const inDegree = new Array(n).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count++;

    for (let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if (pair[1] === current) {
        inDegree[pair[0]]--;
        if (inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }

  return count === n;
};

module.exports = { canFinishBFS, canFinishTSwithAL, canFinishTS };
