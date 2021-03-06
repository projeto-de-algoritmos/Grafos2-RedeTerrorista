import React from 'react';
import Person from '../../assets/male-user.png';
import { MdPhoneForwarded } from 'react-icons/md';
import './styles.css';

const TargetsConnection = ({ edges }) => {
  return (
    <div id="targets-connection-container">
      <h1 id="targets-connection-title">Todas as Ligações</h1>

      <div id="targets-connection-content">
        {edges.map((edge) => (
          <div id="target-connection-wanted-card">
            <div id="target-connection-wanted-content">
              <img
                id="target-connection-wanted-image"
                src={Person}
                alt="wanted"
              />
              <h2 id="target-connection-wanted-name">{edge.source}</h2>
            </div>

            <MdPhoneForwarded size={30} color="#000" id="icon-phone" />

            <div id="target-connection-wanted-content">
              <img
                id="target-connection-wanted-image"
                src={Person}
                alt="wanted"
              />
              <h2 id="target-connection-wanted-name">{edge.target}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetsConnection;
