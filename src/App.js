import React from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="container">
      <h1>Total Cases Around the World</h1>
      <div className="card-container">
        <Card country="Turkey" short="TR"
        api="https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST" />
        <Card country="United Kingdom" short="UK"
        api="https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST" />
        <Card country="Belgium" short="BE"
        api="https://api.apify.com/v2/key-value-stores/apVM8aZ8hKZFvnKm7/records/LATEST" />
        <Card country="Italy" short="IT" 
        api="https://api.apify.com/v2/key-value-stores/UFpnR8mukiu0TSrb4/records/LATEST" />
      </div>
    </div>
  );
}

export default App;
