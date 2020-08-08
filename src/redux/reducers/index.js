import { combineReducers } from 'redux';

import gameDataReducer from './game-data-reducer';


const reducers = combineReducers({
    gameData: gameDataReducer,
});

export default reducers;
