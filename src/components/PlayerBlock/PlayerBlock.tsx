import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import birgImg from '../../imgs/bird.jpg';
import birdsData from "../../constants/birdsData";
import styles from './PlayerBlock.module.scss';
import { GameDataType } from '../../redux/reducers/game-data-reducer';
import './player.scss';

type PlayerBlockType = {
    gameData: GameDataType
}

const PlayerBlock = ({ gameData }:PlayerBlockType) => {
    const currentBirdData = birdsData[gameData.round][gameData.hiddenBird];
    const { isTrueAnswer } = gameData;
    const { image } = currentBirdData;

    const Player = () => (
        <AudioPlayer
            src={currentBirdData.audio}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            onPlay={() => console.log("onPlay")}
        />
    );

    const showingBirdText = currentBirdData.name;
    let hiddenBirdText = '******';
    const hiddenBirdElem = () => (gameData.isTrueAnswer) ? showingBirdText : hiddenBirdText;

  return (
    <div className={styles.PlayerBlock}>
      <div className={styles.PlayerBlock__img}><img src={isTrueAnswer ? image : birgImg} alt="bird" /></div>
      <div className={styles['PlayerBlock__player-container']}>
        <div className={styles['PlayerBlock__hidden-text']}>{hiddenBirdElem()}</div>
        <div className={styles.PlayerBlock__player}>{Player()}</div>
      </div>
    </div>
  );
};

export default PlayerBlock;
