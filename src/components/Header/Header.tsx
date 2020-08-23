import React from 'react';

import {GameDataType} from "../../redux/reducers/game-data-reducer";
import styles from './Header.module.scss';

type HeaderType = {
    gameData: GameDataType
}

const Header = ( { gameData }:HeaderType) => {
    const { points } = gameData;
  return (
    <header className={styles.Header}>
      <div className={styles.Header__img} />
      <div className={styles.Header__score}>Score: {points}</div>
    </header>
  );
};

export default Header;

