const traversalBFSAL = function (graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
};

const traversalDFSAL = function (vertex, graph, values = [], seen = {}) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) {
      traversalDFSAL(connection, graph, values, seen);
    }
  }

  return values;
};

const traversalBFSAM = function (graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (connection === 1 && !seen[i]) {
        queue.push(i);
      }
    }
  }

  return values;
};

const traversalDFSAM = function (vertex, graph, values = [], seen = {}) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (connection === 1 && !seen[i]) {
      traversalDFSAM(i, graph, values, seen);
    }
  }

  return values;
};

module.exports = {
  traversalBFSAL,
  traversalDFSAL,
  traversalBFSAM,
  traversalDFSAM,
};
