import './App.css';
import Graph from 'react-graph-vis';
import { populateGraph } from './utils/populateGraph';
// import './styles.css';
// import './network.css';

const App = () => {
  const graph = populateGraph();

  const options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    nodes: {
      borderWidth: 3,
      size: 10,
      color: {
        border: '#222222',
        background: '#ffff',
        highlight: {
          border: '#000080',
          background: '#4682B4',
        },
      },
      font: { color: '#2f2f2f' },
    },
    edges: {
      color: '#f00',
      arrows: {
        to: {
          enabled: false,
        },
        from: {
          enabled: false,
        },
      },
    },
  };

  const events = {
    select: function (event) {
      // var { nodes, edges } = event;
    },
  };

  return (
    <div className="App">
      <h1>Terrorist Network</h1>
      <div className="graph-container">
        <Graph graph={graph} options={options} events={events} />
      </div>
    </div>
  );
};

export default App;
