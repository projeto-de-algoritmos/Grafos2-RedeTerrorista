import React from 'react';
import Graph from 'react-graph-vis';
import { graphConfigOptions } from '../../utils/graphConfigOptions.js';

const MinimalSpanningTree = ({ graph }) => {
  const options = graphConfigOptions;

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };

  return (
    <div id="targets-connection-container">
      <h1 id="targets-connection-title">Árvore Geradora Mínima</h1>

      <div id="targets-connection-graph">
        <Graph graph={graph} options={options} events={events} />
      </div>
    </div>
  );
};

export default MinimalSpanningTree;
