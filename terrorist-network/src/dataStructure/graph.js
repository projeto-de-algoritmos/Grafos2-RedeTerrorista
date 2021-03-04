export class Graph {
  constructor() {
    this.nodes = {};
    this.cost = 0;
    this.path = {};
  }

  // Adiciona um nó no grafo
  addNode(id) {
    var node = {
      id: id,
      neighbor: [],
      degree: 0,
    };

    this.nodes[id] = node;
  }

  // Adiciona aresta aos nós
  addEdge(source, target, weight) {
    var newEdge = {
      source: source,
      target: target,
      weight: weight,
    };

    this.nodes[source]['neighbor'].push(newEdge);
    this.nodes[source]['degree']++;

    var newEdgeInvert = {
      source: target,
      target: source,
      weight: weight,
    };

    this.nodes[target]['neighbor'].push(newEdgeInvert);
    this.nodes[target]['degree']++;
  }

  // Retorna todos os nós do grafo
  getNodes() {
    return this.nodes;
  }

  getEdges() {
    var edges = [];

    for (var node in this.nodes) {
      for (var edge of this.nodes[edge]['neighbor']) {
        var newEdge = {
          from: node,
          to: edge.toString(),
        };
        edges.push(newEdge);
      }
    }

    return edges;
  }

  getPath() {
    return this.path;
  }

  getCost() {
    return this.cost;
  }

  print() {
    console.log(this.nodes);
  }
}
