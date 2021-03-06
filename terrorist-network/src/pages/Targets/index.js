import React from 'react';
import Person from '../../assets/male-user.png';
import './styles.css';

const Targets = ({ nodes }) => {
  return (
    <div id="targets-container">
      <h1 id="targets-title">Alvos</h1>

      <div id="targets-content">
        {nodes.map((node) => (
          <div key={node.id} id="target-wanted-content">
            <img id="target-wanted-image" src={Person} alt="wanted" />
            <h2 id="target-wanted-name">{node.id}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Targets;
