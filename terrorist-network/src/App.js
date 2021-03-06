import React, { useEffect, useState } from 'react';
import './App.css';
import { populateGraph } from './utils/populateGraph';
import { formatGraphGeneral } from './utils/formatGraph';
import { Graph } from './dataStructure/prim';
import Targets from './pages/Targets';
import TargetsConnection from './pages/TargetsConnection';
import Home from './pages/Home';

const App = () => {
  const graph = new Graph();

  const [changePage, setChangePage] = useState(0);
  const [graphData, setGraphData] = useState(graph);
  const [cost, setCost] = useState(0);

  // const graphData = populateGraph(graph);
  const graphdataFormated = formatGraphGeneral(graphData);
  // const prim = graphData.prim('Anaísa Gomide Rosário');

  const handlePopulateGraph = () => {
    setGraphData(populateGraph(graph));
    alert('Grafo populado');
  };

  const handleCalculateCost = () => {
    setCost(graphData.prim('Anaísa Gomide Rosário').total);
  };

  const renderPage = () => {
    if (changePage === 0) {
      return <Home />;
    } else if (changePage === 1) {
      return <Targets nodes={graphdataFormated.nodes} />;
    } else if (changePage === 2) {
      return <TargetsConnection edges={graphdataFormated.edges} />;
    } else if (changePage === 3) {
      return <h1>{cost}</h1>;
    }
  };

  useEffect(() => {
    renderPage();
  }, [changePage]);

  return (
    <div id="app">
      <div id="app-sidebar">
        <div>
          <h1 id="app-sidebar-title">Terrorist Network</h1>

          <button
            id="button-targets"
            type="button"
            onClick={() => setChangePage(0)}
          >
            Home
          </button>

          <button
            id="button-targets"
            type="button"
            onClick={() => setChangePage(1)}
          >
            Alvos
          </button>

          <button
            id="button-targets"
            type="button"
            onClick={() => setChangePage(2)}
          >
            Ligações entre Alvos
          </button>

          <button
            id="button-targets"
            type="button"
            onClick={() => handlePopulateGraph()}
          >
            Popular Grafo
          </button>

          <button
            id="button-targets"
            type="button"
            onClick={() => handleCalculateCost()}
          >
            Calcular menores ligações
          </button>
        </div>

        <div id="app-sidebar-cost">
          <h1 id="app-sidebar-cost-title">Menor custo (minutos)</h1>
          <h2>{cost}</h2>
        </div>
      </div>
      <div id="app-content">{renderPage()}</div>
    </div>
  );
};

export default App;
