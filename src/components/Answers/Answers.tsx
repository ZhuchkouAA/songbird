import React from 'react';

import birdsData from "../../constants/birdsData";
import { GameDataType } from '../../redux/reducers/game-data-reducer';
import styles from './Answers.module.scss';

type AnswersType = {
    gameData: GameDataType
}

const Answers = ( { gameData } :AnswersType) => {
    console.log(birdsData[gameData.round])

    const Answers = birdsData[gameData.round].map((bird) => {
        return <li key={bird.id} ><span className={styles.Answers__point}></span>{bird.name}</li>
    })

  return (
      <ul className={styles.Answers}>
          {Answers}
      </ul>
  );
};

export default Answers;
