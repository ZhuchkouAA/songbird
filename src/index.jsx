import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {connect, Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import Answers from "./components/Answers/Answers";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

const AppContainer = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
