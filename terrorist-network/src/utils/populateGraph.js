export function populateGraph(graph) {
  const generateTime = () => {
    return Math.floor(Math.random() * 30);
  }

  // Adição dos nós (possíveis terroristas)
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

  // Adição das arestas (tempo (em minutos) de ligação entre duas pessoas)
  graph.addEdge("Kelton Boaventura Natal", "Ezio Feijó Gaspar", generateTime());
  graph.addEdge("Kelton Boaventura Natal", "Ivo Freire Guilheiro", generateTime());
  graph.addEdge("Kelton Boaventura Natal", "Gonçalo Torrado Colares", generateTime());
  graph.addEdge("Ezio Feijó Gaspar", "Ivo Freire Guilheiro", generateTime());
  graph.addEdge("Ezio Feijó Gaspar", "Gonçalo Torrado Colares", generateTime());
  graph.addEdge("Ivo Freire Guilheiro", "Gonçalo Torrado Colares", generateTime());
  graph.addEdge("Ivo Freire Guilheiro", "Esther Fernandes Cerqueira", generateTime());
  graph.addEdge("Gonçalo Torrado Colares", "Esther Fernandes Cerqueira", generateTime());
  graph.addEdge("Gonçalo Torrado Colares", "Édi Morais Domingues", generateTime());
  graph.addEdge("Gonçalo Torrado Colares", "Zhen Galante Gama", generateTime());
  graph.addEdge("Gonçalo Torrado Colares", "Kylian Belmonte Mantas", generateTime());
  graph.addEdge("Esther Fernandes Cerqueira", "Édi Morais Domingues", generateTime());
  graph.addEdge("Esther Fernandes Cerqueira", "Zhen Galante Gama", generateTime());
  graph.addEdge("Édi Morais Domingues", "Aya Cisneiros Valim", generateTime());
  graph.addEdge("Édi Morais Domingues", "Otília Covilhã Bilhalva", generateTime());
  graph.addEdge("Zhen Galante Gama", "Kylian Belmonte Mantas", generateTime());
  graph.addEdge("Kylian Belmonte Mantas", "Aya Cisneiros Valim", generateTime());
  graph.addEdge("Kylian Belmonte Mantas", "Lya Fazendeiro Breia", generateTime());
  graph.addEdge("Aya Cisneiros Valim", "Otília Covilhã Bilhalva", generateTime());
  graph.addEdge("Aya Cisneiros Valim", "Teresa Amaral Adão", generateTime());
  graph.addEdge("Aya Cisneiros Valim", "Mafalda Borges Couceiro", generateTime());
  graph.addEdge("Aya Cisneiros Valim", "Lya Fazendeiro Breia", generateTime());
  graph.addEdge("Esther Fernandes Cerqueira", "Isac Pescada Ferraz", generateTime());
  graph.addEdge("Zhen Galante Gama", "Briana Madureira Matias", generateTime());
  graph.addEdge("Aya Cisneiros Valim", "Anaísa Gomide Rosário", generateTime());
  graph.addEdge("Otília Covilhã Bilhalva", "Anaísa Gomide Rosário", generateTime());
  graph.addEdge("Otília Covilhã Bilhalva", "Isac Pescada Ferraz", generateTime());
  graph.addEdge("Otília Covilhã Bilhalva", "Lya Fazendeiro Breia", generateTime());
  graph.addEdge("Lya Fazendeiro Breia", "Isac Pescada Ferraz", generateTime());
  graph.addEdge("Lya Fazendeiro Breia", "Ivo Freire Guilheiro", generateTime());
  graph.addEdge("Lya Fazendeiro Breia", "Édi Morais Domingues", generateTime());
  graph.addEdge("Lya Fazendeiro Breia", "Daria Pinhal Craveiro", generateTime());
  graph.addEdge("Daria Pinhal Craveiro", "Isac Pescada Ferraz", generateTime());
  graph.addEdge("Daria Pinhal Craveiro", "Teresa Amaral Adão", generateTime());
  graph.addEdge("Daria Pinhal Craveiro", "Iúri Laranjeira Amorim", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Iúri Laranjeira Amorim", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Ezio Feijó Gaspar", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Lya Fazendeiro Breia", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Oscar Serpa Tavares", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Anaísa Gomide Rosário", generateTime());
  graph.addEdge("Teresa Amaral Adão", "Briana Madureira Matias", generateTime());
  graph.addEdge("Briana Madureira Matias", "Iúri Laranjeira Amorim", generateTime());
  graph.addEdge("Briana Madureira Matias", "Oscar Serpa Tavares", generateTime());
  graph.addEdge("Anaísa Gomide Rosário", "Leila Sítima Lameiras", generateTime());
  graph.addEdge("Anaísa Gomide Rosário", "Kelton Boaventura Natal", generateTime());
  graph.addEdge("Anaísa Gomide Rosário", "Ezio Feijó Gaspar", generateTime());
  graph.addEdge("Anaísa Gomide Rosário", "Mafalda Borges Couceiro", generateTime());
  graph.addEdge("Pietra Alcântara Espinosa", "Otília Covilhã Bilhalva", generateTime());

  return graph;
};
