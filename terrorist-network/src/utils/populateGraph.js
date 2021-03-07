export function populateGraph(graph) {
  const generateTime = () => {
    return Math.floor(Math.random() * 30);
  }

  // Adição dos nós (possíveis terroristas)
  graph.addNode("Kelton");
  graph.addNode("Ezio");
  graph.addNode("Ivo");
  graph.addNode("Gonçalo");
  graph.addNode("Esther");
  graph.addNode("Édi");
  graph.addNode("Zhen");
  graph.addNode("Kylian");
  graph.addNode("Aya");
  graph.addNode("Otília");
  graph.addNode("Lya");
  graph.addNode("Teresa");
  graph.addNode("Mafalda");
  graph.addNode("Pietra");
  graph.addNode("Isac");
  graph.addNode("Daria");
  graph.addNode("Iúri");
  graph.addNode("Oscar");
  graph.addNode("Leila");
  graph.addNode("Briana");
  graph.addNode("Anaísa");

  // Adição das arestas (tempo (em minutos) de ligação entre duas pessoas)
  graph.addEdge("Kelton", "Ezio", generateTime());
  graph.addEdge("Kelton", "Ivo", generateTime());
  graph.addEdge("Kelton", "Gonçalo", generateTime());
  graph.addEdge("Ezio", "Ivo", generateTime());
  graph.addEdge("Ezio", "Gonçalo", generateTime());
  graph.addEdge("Ivo", "Gonçalo", generateTime());
  graph.addEdge("Ivo", "Esther", generateTime());
  graph.addEdge("Gonçalo", "Esther", generateTime());
  graph.addEdge("Gonçalo", "Édi", generateTime());
  graph.addEdge("Gonçalo", "Zhen", generateTime());
  graph.addEdge("Gonçalo", "Kylian", generateTime());
  graph.addEdge("Esther", "Édi", generateTime());
  graph.addEdge("Esther", "Zhen", generateTime());
  graph.addEdge("Édi", "Aya", generateTime());
  graph.addEdge("Édi", "Otília", generateTime());
  graph.addEdge("Zhen", "Kylian", generateTime());
  graph.addEdge("Kylian", "Aya", generateTime());
  graph.addEdge("Kylian", "Lya", generateTime());
  graph.addEdge("Aya", "Otília", generateTime());
  graph.addEdge("Aya", "Teresa", generateTime());
  graph.addEdge("Aya", "Mafalda", generateTime());
  graph.addEdge("Aya", "Lya", generateTime());
  graph.addEdge("Esther", "Isac", generateTime());
  graph.addEdge("Zhen", "Briana", generateTime());
  graph.addEdge("Aya", "Anaísa", generateTime());
  graph.addEdge("Otília", "Anaísa", generateTime());
  graph.addEdge("Otília", "Isac", generateTime());
  graph.addEdge("Otília", "Lya", generateTime());
  graph.addEdge("Lya", "Isac", generateTime());
  graph.addEdge("Lya", "Ivo", generateTime());
  graph.addEdge("Lya", "Édi", generateTime());
  graph.addEdge("Lya", "Daria", generateTime());
  graph.addEdge("Daria", "Isac", generateTime());
  graph.addEdge("Daria", "Teresa", generateTime());
  graph.addEdge("Daria", "Iúri", generateTime());
  graph.addEdge("Teresa", "Iúri", generateTime());
  graph.addEdge("Teresa", "Ezio", generateTime());
  graph.addEdge("Teresa", "Lya", generateTime());
  graph.addEdge("Teresa", "Oscar", generateTime());
  graph.addEdge("Teresa", "Anaísa", generateTime());
  graph.addEdge("Teresa", "Briana", generateTime());
  graph.addEdge("Briana", "Iúri", generateTime());
  graph.addEdge("Briana", "Oscar", generateTime());
  graph.addEdge("Anaísa", "Leila", generateTime());
  graph.addEdge("Anaísa", "Kelton", generateTime());
  graph.addEdge("Anaísa", "Ezio", generateTime());
  graph.addEdge("Anaísa", "Mafalda", generateTime());
  graph.addEdge("Pietra", "Otília", generateTime());

  return graph;
};
