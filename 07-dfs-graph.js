class Graph {
  constructor() {
    this.adj = {};
  }

  addVertex(v) {
    if (!this.adj[v]) {
      this.adj[v] = [];
    }
  }

  addEdges(v1, v2) {
    if (!this.adj[v1]) {
      this.addVertex(v1);
    }

    if (!this.adj[v2]) {
      this.addVertex(v2);
    }

    this.adj[v1].push(v2);
  }

  Dfs(start) {
    let visited = {};
    let stack = [start];

    while (stack.length) {
      let current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        console.log("Visited Node:", current);
        for (let neighbor of this.adj[current]) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("A", "D");

graph.addEdges("B", "A");
graph.addEdges("B", "D");

graph.addEdges("C", "A");
graph.addEdges("C", "D");

graph.addEdges("D", "B");
graph.addEdges("D", "C");
graph.addEdges("D", "A");

console.log(graph);

graph.Dfs("B");
