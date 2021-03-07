import React, { useEffect, useState } from 'react';
import './App.css';
import { populateGraph } from './utils/populateGraph';
import { formatGraphGeneral, formatGraphPrim } from './utils/formatGraph';
import { Graph } from './dataStructure/prim';
import Targets from './pages/Targets';
import TargetsConnection from './pages/TargetsConnection';
import MinimalSpanningTree from './pages/MinimalSpanningTree';
import Home from './pages/Home';

const App = () => {
  const graph = new Graph();

  const [changePage, setChangePage] = useState(0);
  const [graphData, setGraphData] = useState(graph);
  const [cost, setCost] = useState(0);
  const [selectTarget, setSelectTarget] = useState('');

  const graphdataFormated = formatGraphGeneral(graphData);

  const handlePopulateGraph = () => {
    setGraphData(populateGraph(graph));
    alert('Grafo populado');
  };

  const handleCalculateCost = () => {
    const graphPrim = graphData;
    setCost(graphPrim.prim(selectTarget).total);
  };

  const renderPage = () => {
    if (changePage === 0) {
      return <Home />;
    } else if (changePage === 1) {
      return <Targets nodes={graphdataFormated.nodes} />;
    } else if (changePage === 2) {
      return <TargetsConnection graph={graphdataFormated} />;
    } else if (changePage === 3) {
      return <h1>{cost}</h1>;
    } else if (changePage === 4) {
      return (
        <MinimalSpanningTree
          graph={formatGraphPrim(graphData, selectTarget)}
        />
      );
    }
  };

  useEffect(() => {
    renderPage();
  }, [changePage]);

  return (
    <div id="app">
      <div id="app-sidebar">
        <div id="app-sidebar-buttons">
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
            onClick={() => handlePopulateGraph()}
          >
            Popular Grafo
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
            onClick={() => {
              console.log(graphdataFormated);
              setChangePage(2);
            }}
          >
            Ligações entre Alvos
          </button>

          <button
            id="button-targets"
            type="button"
            disabled={selectTarget !== '' ? false : true}
            onClick={() => {
              setChangePage(4);
              handleCalculateCost();
            }}
          >
            Calcular menores ligações
          </button>
          <div id="select-target-box">
            <select
              value={selectTarget}
              onChange={(event) => setSelectTarget(event.target.value)}
            >
              <>
                <option key={0} value={null}>
                  Selecione
                </option>
                {graphdataFormated.nodes.map((target) => (
                  <option
                    key={target.id}
                    value={target.id}
                  >
                    {target.id}
                  </option>
                ))}
              </>
            </select>
          </div>
        </div>

        <div id="app-sidebar-cost">
          <h1 id="app-sidebar-cost-title">Menor custo (minutos)</h1>
          <h2 id="app-sidebar-cost-subtitle">{cost}</h2>
        </div>
      </div>
      <div id="app-content">{renderPage()}</div>
    </div>
  );
};

export default App;
