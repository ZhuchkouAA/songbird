import React from 'react';
import classNames from 'classnames';

import {GameDataType} from "../../redux/reducers/game-data-reducer";
import styles from './EndGameBlock.module.scss';
import buttonStyles from '../Button/Button.module.scss';

const EndGameBlock = (props:any) => {
    const { gameData } = props;
    const { setRound } = props;

    const handleClick = () => {
        setRound(0);
    }

    return (
        <div className={styles.EndGameBlock}>
            <div className={styles.EndGameBlock__title}>Поздравляем!</div>
            <div className={styles.EndGameBlock__description}>Вы прошли викторину и набрали {gameData.points} из 30
                возможных баллов
            </div>
            <button onClick={handleClick} className={classNames(buttonStyles.Button, styles.EndGameBlock__button)}>Попробовать еще раз!
            </button>
        </div>
    )
}

export default EndGameBlock;
