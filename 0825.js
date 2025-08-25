function solution(edges) {
  const indeg = new Map();
  const outdeg = new Map();

  for (const [u, v] of edges) {
    outdeg.set(u, (outdeg.get(u) || 0) + 1);
    indeg.set(v, (indeg.get(v) || 0) + 1);

    if (!indeg.has(u)) indeg.set(u, 0);
    if (!outdeg.has(v)) outdeg.set(v, 0);
  }

  let newNode = -1;
  for (const node of outdeg.keys()) {
    if ((outdeg.get(node) || 0) >= 2 && (indeg.get(node) || 0) === 0) {
      newNode = node;
      break;
    }
  }

  let donut = 0, stick = 0, eight = 0;

  for (const [u, v] of edges) {
    if (u !== newNode) continue;

    let cur = v;
    let visited = new Set();
    let type = "donut"; 

    while (true) {
      if (visited.has(cur)) {
        break;
      }
      visited.add(cur);

      if ((outdeg.get(cur) || 0) === 0) {
        type = "stick";
        break;
      }

      if ((indeg.get(cur) || 0) >= 2) {
        type = "eight";
        break;
      }

      for (const [a, b] of edges) {
        if (a === cur) {
          cur = b;
          break;
        }
      }
    }

    if (type === "donut") donut++;
    if (type === "stick") stick++;
    if (type === "eight") eight++;
  }

  return [newNode, donut, stick, eight];
}

console.log(solution([[2,4],[3,4],[4,2],[1,2],[1,5]])); 
