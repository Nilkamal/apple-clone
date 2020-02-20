import React from 'react';
import './App.css';
import Header from './components/header-component';
import MainContent from './components/main-content-component';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
