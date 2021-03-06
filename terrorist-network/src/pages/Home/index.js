import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div id="home-container">
      <h1>Home</h1>

      <div id="home-steps">
        <h2>1. Popule o Grafo</h2>
        <h2>2. Veja os Alvos e as ligações que eles realizaram</h2>
        <h2>3. Calcule as menores ligações que passem por todos eles</h2>
      </div>
    </div>
  );
};

export default Home;
