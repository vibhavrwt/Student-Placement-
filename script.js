function showTraversal(kind) {
  const result = document.getElementById("traversal-result");
  const orders = {
    BFS: "BFS (Breadth-First Search): Vibhav Rawat → Prachi Raghav → Ridhima Sinha → Sumit Kumar → Abhas Rawat → Python → SQL → Web → Java → Analysis → Cybersecurity → Internship → Placement",
    DFS: "DFS (Depth-First Search): Vibhav Rawat → Python → SQL → Ridhima Sinha → Java → Sumit Kumar → Analysis → Abhas Rawat → Web → Cybersecurity → Internship → Placement"
  };
  result.textContent = orders[kind] + " — illustrative order for learning; traversal depends on the chosen adjacency list and neighbor ordering.";
}
