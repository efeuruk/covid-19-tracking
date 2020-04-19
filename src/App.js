import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="container">
      <h1>Total Covid-19 Cases Around the World</h1>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
