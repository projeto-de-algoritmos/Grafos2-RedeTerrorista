import { Graph } from '../dataStructure/prim.js';
import { populateGraph } from './populateGraph.js';

export const formatGraphGeneral = (graph) => {
  const getNodes = graph.getNodes();
  const getEdges = graph.getEdges();
  var allNodes = [];
  var allEdges = [];

  for (var node in getNodes) {
    allNodes.push({
      id: getNodes[node].id,
      label: getNodes[node].id,
    });
  }

  var i = 0;
  for (var edge in getEdges) {
    allEdges.push({
      from: getEdges[edge].to.source,
      to: getEdges[edge].to.target,
      label: `${getEdges[edge].to.weight}`,
      id: i,
    });
    i++;
  }

  const graphFormated = {
    nodes: allNodes,
    edges: allEdges,
  };

  return graphFormated;
};

export const formatGraphPrim = (graph, target) => {
  var graphPrim = graph.prim(target);

  var allNodes = [];
  var allEdges = [];

  const getNodes = graph.getNodes();
  for (var node in getNodes) {
    allNodes.push({
      id: getNodes[node].id,
      label: getNodes[node].id,
    });
  }

  var i = 0;
  for (var edge in graphPrim.edges) {
    allEdges.push({
      from: graphPrim.edges[edge].source,
      to: graphPrim.edges[edge].target,
      label: `${graphPrim.edges[edge].cost}`,
      id: i,
    });
    i++;
  }

  const graphFormated = {
    nodes: allNodes,
    edges: allEdges,
  };

  return graphFormated;
};
