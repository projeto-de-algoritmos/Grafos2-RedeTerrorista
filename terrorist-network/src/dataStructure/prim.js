import { Heap } from './priorityQueue.js'

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
      for (var edge of this.nodes[node]['neighbor']) {
        var newEdge = {
          from: node,
          to: edge,
        };
        edges.push(newEdge);
      }
    }

    return edges;
  }

  prim(initialElement) {
    const heap = new Heap();
    var nodesExplored = {};
    var edges = [];
    var total = 0;

    // Adiciona todos os nós a fila de prioridades (heap) -> O(n)
    for (var node in this.nodes) {
      heap.insert(node);
    }

    // Leva o elemento (se for o de menor valor) ao topo do heap -> O(log n)
    heap.updatePriority(initialElement, 0);

    // Remove o elemento head do heap -> O(log n)
    var u = heap.removeFirst();

    while (heap.priorityQueue.length !== 0) {
      // Adiciona o primeiro elemento que foi removido aos nós já explorados (CUT)
      nodesExplored[u] = u;

      for (var neighbor of this.nodes[u]['neighbor']) {
        // Verifica se o vizinho de u em questão está fora do CUT (nós explorados)
        // Verifica também se o custo do vizinho atual é menor do que o custo que está atrelado a ele na fila de prioridades
        if (
          typeof nodesExplored[neighbor['target']] === 'undefined' &&
          neighbor['weight'] <
          heap.priorityQueue[
          heap.auxiliaryStructure[neighbor['target']]['position']
          ]['cost']
        ) {
          // O(log N)
          heap.updatePriority(neighbor['target'], neighbor['weight'], u);
        }
      }

      // Após visitar cada vizinho de u, o algoritmo irá adicionar uma nova aresta à árvore geradora

      var newEdge = {
        source: heap.priorityQueue[0]['source'],
        target: heap.priorityQueue[0]['id'],
        cost: heap.priorityQueue[0]['cost'],
      };

      // Adiciona a aresta a estrutura que armazena as arestas
      edges.push(newEdge);

      // Adiciona o custo daquela aresta ao custo total da árvore geradora
      total += heap.priorityQueue[0]['cost'];

      // Novo u
      u = heap.removeFirst();
    }

    this.cost = total;
    this.path = edges;
    console.log(edges);
    console.log(total);
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
