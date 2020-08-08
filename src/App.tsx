import React from 'react';

import Header from './components/Header';
import Pagination from './components/Pagination';
import PlayerBlock from './components/PlayerBlock';
import Answers from './components/Answers';
import InfoBlock from './components/InfoBlock';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Pagination />
      <PlayerBlock />
      <div className="main">
        <Answers />
        <InfoBlock />
      </div>
      <Button />
    </div>
  );
}

export default App;
