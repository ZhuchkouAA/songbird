import React from 'react';

import Header from './components/Header';
import Pagination from './components/Pagination';
import PlayerBlock from './components/PlayerBlock';
import Answers from './components/Answers';
import InfoBlock from './components/InfoBlock';
import Button from './components/Button';
import EndGameBlock from "./components/EndGameBlock";
import {GameDataType} from "./redux/reducers/game-data-reducer";
import './App.css';

type AppType = {
    gameData: GameDataType
}

function App({gameData}: AppType) {
    const {isEndGame} = gameData;

    const mainElements = (
        <>
            <Pagination/>
            <PlayerBlock/>
            <div className="main">
                <Answers/>
                <InfoBlock/>
            </div>
            <Button/>
        </>)

    const endGameElements = (
       <EndGameBlock/>
    )

    return (
        <div className="app">
            <Header/>
            {isEndGame ? endGameElements : mainElements }
        </div>
    );
}

export default App;
