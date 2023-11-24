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
graph.addVertex("Me");

graph.addEdges("Me", "Alice");
graph.addEdges("Me", "Bob");
graph.addEdges("Me", "Claire");

graph.addEdges("Bob", "Anuj");
graph.addEdges("Bob", "Peggy");

graph.addEdges("Claire", "Thom");
graph.addEdges("Claire", "Jonny");

graph.addEdges("Alice", "Peggy");

console.log(graph);

graph.Dfs("Me");
