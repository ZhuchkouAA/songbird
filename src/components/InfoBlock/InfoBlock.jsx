import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

import testImg from '../../imgs/bird.jpg';
import sound from '../../sounds/test.mp3';
import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
    const Player = () => (
        <AudioPlayer
            src={sound}
            autoPlay={false}
            onPlay={e => console.log("onPlay")}
        />
    );

  return (
    <div className={styles.InfoBlock}>
      <div className={styles.InfoBlock__info}>
        <div className={styles.InfoBlock__img}><img src={testImg} alt="bird"/></div>
        <div className={styles.InfoBlock__player}>
          <h4 className={styles.InfoBlock__title}>Журавль</h4>
          <div className={styles['InfoBlock__title-mini']}>Grus grus</div>
          <div className={styles.Player}>{Player()}</div>
        </div>
      </div>
      <div className={styles.InfoBlock__description}>Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы».
        Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если
        птица поёт одна, то она издает только звук «кур».
      </div>
    </div>
  );
};

export default InfoBlock;
