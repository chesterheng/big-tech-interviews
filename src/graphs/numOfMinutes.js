// https://leetcode.com/problems/time-needed-to-inform-all-employees/

var numOfMinutes = function (n, headID, manager, informTime) {
  // build an adjacency list
  const subordinates = manager.map(() => []);

  for (let i = 0; i < n; i++) {
    const managerID = manager[i];
    if (managerID === -1) continue;

    subordinates[managerID].push(i);
  }

  // cycle? no
  // unconnected? no
  return dfs(headID, subordinates, informTime);
};

const dfs = function (currentID, subordinates, informTime) {
  if (subordinates[currentID].length === 0) {
    return 0;
  }

  let totalTime = 0;
  const connections = subordinates[currentID];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    totalTime = Math.max(totalTime, dfs(connection, subordinates, informTime));
  }
  return totalTime + informTime[currentID];
};

module.exports = numOfMinutes;
