import React from 'react';
import classNames from 'classnames';

import {GameDataType} from "../../redux/reducers/game-data-reducer";
import styles from './Button.module.scss';

type AnswersType = {
    gameData: GameDataType
    setRound: any
}


const Button = ({gameData, setRound}: AnswersType) => {
    const { round } = gameData;
    const handlerClick = () => {
      setRound(round + 1);
    }

    return (
        <button onClick={handlerClick} disabled={!gameData.isTrueAnswer}
                className={classNames(styles.Button, !gameData.isTrueAnswer && styles.disabled)} type="button">Next
            Level</button>
    );
};

export default Button;
