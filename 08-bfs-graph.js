class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }

  addEdges(v1, v2) {
    if (!this.adjList[v1]) {
      this.addVertex(v1);
    }

    if (!this.adjList[v2]) {
      this.addVertex(v2);
    }
    this.adjList[v1].push(v2);
  }

  // in bfs traversal graph uses the  queue FIFO concept and it's traverse through the adjacent list:

  bfs(startVertex) {
    let queue = [startVertex];
    let visited = {};

    while (queue.length) {
      let current = queue.shift();
      if (!visited[current]) {
        visited[current] = true;
        console.log("Visited vertex is : ", current);

        for (let adj of this.adjList[current]) {
          if (!visited[adj]) {
            queue.push(adj);
          }
        }
      }
    }
  }
}

let graph = new Graph();
graph.addVertex(1);

graph.addEdges(1, 2);
graph.addEdges(1, 3);
graph.addEdges(1, 4);

graph.addEdges(2, 1);
graph.addEdges(2, 4);

graph.addEdges(3, 1);
graph.addEdges(3, 4);

graph.addEdges(4, 1);
graph.addEdges(4, 2);
graph.addEdges(4, 3);

console.log(graph);

graph.bfs(1);
