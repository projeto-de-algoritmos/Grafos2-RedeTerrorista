import { Graph } from '../dataStructure/prim.js';
import { populateGraph } from './populateGraph.js';

export const formatGraphGeneral = (graph) => {
  const getNodes = graph.getNodes();
  const getEdges = graph.getEdges();
  var allNodes = [];
  var allEdges = [];

  for (var node in getNodes) {
    allNodes.push({
      id: getNodes[node].id.split(' ')[0],
      label: getNodes[node].id,
    });
  }

  for (var edge in getEdges) {
    allEdges.push({
      source: getEdges[edge].to.source.split(' ')[0],
      target: getEdges[edge].to.target.split(' ')[0],
    });
  }

  const graphFormated = {
    nodes: allNodes,
    edges: allEdges,
  };

  return graphFormated;
};

// export const formatGraphPrim = (graph, target) => {
//   var graphPrim = graph.prim(target);

//   var allNodes = [];
//   var allEdges = [];

//   const getNodes = graph.getNodes();
//   for (var node in getNodes) {
//     allNodes.push({
//       id: getNodes[node].id.split(' ')[0],
//       label: getNodes[node].id.split(' ')[0],
//     });
//   }

//   for (var edge in graphPrim.edges) {
//     allEdges.push({
//       from: graphPrim.edges[edge].source.split(' ')[0],
//       to: graphPrim.edges[edge].target.split(' ')[0],
//     });
//   }

//   const graphFormated = {
//     nodes: allNodes,
//     edges: allEdges,
//   };

//   return graphFormated;
// };

// const graph = new Graph();
// populateGraph(graph);
// graph.prim('Anaísa Gomide Rosário')
// console.log(graph)
// console.log(formatGraphGeneral(graphData));

// console.log(people[0].coordinates)
