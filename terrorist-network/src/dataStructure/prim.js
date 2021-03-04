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

const graph = new Graph();

graph.addNode("Kelton Boaventura Natal");
graph.addNode("Ezio Feijó Gaspar");
graph.addNode("Ivo Freire Guilheiro");
graph.addNode("Gonçalo Torrado Colares");
graph.addNode("Esther Fernandes Cerqueira");
graph.addNode("Édi Morais Domingues");
graph.addNode("Zhen Galante Gama");
graph.addNode("Kylian Belmonte Mantas");
graph.addNode("Aya Cisneiros Valim");
graph.addNode("Otília Covilhã Bilhalva");
graph.addNode("Lya Fazendeiro Breia");
graph.addNode("Teresa Amaral Adão");
graph.addNode("Mafalda Borges Couceiro");
graph.addNode("Pietra Alcântara Espinosa");
graph.addNode("Isac Pescada Ferraz");
graph.addNode("Daria Pinhal Craveiro");
graph.addNode("Iúri Laranjeira Amorim");
graph.addNode("Oscar Serpa Tavares");
graph.addNode("Leila Sítima Lameiras");
graph.addNode("Briana Madureira Matias");
graph.addNode("Anaísa Gomide Rosário");

graph.addEdge("Kelton Boaventura Natal", "Ezio Feijó Gaspar", 0)
graph.addEdge("Kelton Boaventura Natal", "Ivo Freire Guilheiro", 0)
graph.addEdge("Kelton Boaventura Natal", "Gonçalo Torrado Colares", 0)
graph.addEdge("Ezio Feijó Gaspar", "Ivo Freire Guilheiro", 0)
graph.addEdge("Ezio Feijó Gaspar", "Gonçalo Torrado Colares", 0)
graph.addEdge("Ivo Freire Guilheiro", "Gonçalo Torrado Colares", 0)
graph.addEdge("Ivo Freire Guilheiro", "Esther Fernandes Cerqueira", 0)
graph.addEdge("Gonçalo Torrado Colares", "Esther Fernandes Cerqueira", 0)
graph.addEdge("Gonçalo Torrado Colares", "Édi Morais Domingues", 0)
graph.addEdge("Gonçalo Torrado Colares", "Zhen Galante Gama", 0)
graph.addEdge("Gonçalo Torrado Colares", "Kylian Belmonte Mantas", 0)
graph.addEdge("Esther Fernandes Cerqueira", "Édi Morais Domingues", 0)
graph.addEdge("Esther Fernandes Cerqueira", "Zhen Galante Gama", 0)
graph.addEdge("Édi Morais Domingues", "Aya Cisneiros Valim", 0)
graph.addEdge("Édi Morais Domingues", "Otília Covilhã Bilhalva", 0)
graph.addEdge("Zhen Galante Gama", "Kylian Belmonte Mantas", 0)
graph.addEdge("Kylian Belmonte Mantas", "Aya Cisneiros Valim", 0)
graph.addEdge("Kylian Belmonte Mantas", "Lya Fazendeiro Breia", 0)
graph.addEdge("Aya Cisneiros Valim", "Otília Covilhã Bilhalva", 0)
graph.addEdge("Aya Cisneiros Valim", "Teresa Amaral Adão", 0)
graph.addEdge("Aya Cisneiros Valim", "Mafalda Borges Couceiro", 0)
graph.addEdge("Aya Cisneiros Valim", "Lya Fazendeiro Breia", 0)
graph.addEdge("Esther Fernandes Cerqueira", "Isac Pescada Ferraz", 0)
graph.addEdge("Zhen Galante Gama", "Briana Madureira Matias", 0)
graph.addEdge("Aya Cisneiros Valim", "Anaísa Gomide Rosário", 0)
graph.addEdge("Otília Covilhã Bilhalva", "Anaísa Gomide Rosário", 0)
graph.addEdge("Otília Covilhã Bilhalva", "Isac Pescada Ferraz", 0)
graph.addEdge("Otília Covilhã Bilhalva", "Lya Fazendeiro Breia", 0)
graph.addEdge("Lya Fazendeiro Breia", "Isac Pescada Ferraz", 0)
graph.addEdge("Lya Fazendeiro Breia", "Ivo Freire Guilheiro", 0)
graph.addEdge("Lya Fazendeiro Breia", "Édi Morais Domingues", 0)
graph.addEdge("Lya Fazendeiro Breia", "Daria Pinhal Craveiro", 0)
graph.addEdge("Daria Pinhal Craveiro", "Isac Pescada Ferraz", 0)
graph.addEdge("Daria Pinhal Craveiro", "Teresa Amaral Adão", 0)
graph.addEdge("Daria Pinhal Craveiro", "Iúri Laranjeira Amorim", 0)
graph.addEdge("Teresa Amaral Adão", "Iúri Laranjeira Amorim", 0)
graph.addEdge("Teresa Amaral Adão", "Ezio Feijó Gaspar", 0)
graph.addEdge("Teresa Amaral Adão", "Lya Fazendeiro Breia", 0)
graph.addEdge("Teresa Amaral Adão", "Oscar Serpa Tavares", 0)
graph.addEdge("Teresa Amaral Adão", "Anaísa Gomide Rosário", 0)
graph.addEdge("Teresa Amaral Adão", "Briana Madureira Matias", 0)
graph.addEdge("Briana Madureira Matias", "Iúri Laranjeira Amorim", 0)
graph.addEdge("Briana Madureira Matias", "Oscar Serpa Tavares", 0)
graph.addEdge("Anaísa Gomide Rosário", "Leila Sítima Lameiras", 0)
graph.addEdge("Anaísa Gomide Rosário", "Kelton Boaventura Natal", 0)
graph.addEdge("Anaísa Gomide Rosário", "Ezio Feijó Gaspar", 0)
graph.addEdge("Anaísa Gomide Rosário", "Mafalda Borges Couceiro", 0)
