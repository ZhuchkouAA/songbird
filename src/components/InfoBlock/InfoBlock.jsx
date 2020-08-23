import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

import birdsData from "../../constants/birdsData";
import styles from './InfoBlock.module.scss';

const InfoBlock = ({ gameData }) => {
    const activeBirdInfo = birdsData[gameData.round][gameData.activeBirdInfo];
    const Player = () => (
        <AudioPlayer
            src={gameData.activeBirdInfo !== null ? activeBirdInfo.audio : ''}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            onPlay={e => console.log("onPlay")}
        />
    );

    const defaultInfo = () => {
        return (
            <div className={styles.InfoBlock}>Послушайте плеер.
                Выберите птицу из списка</div>
        )
    }

    const birdInfo = () => {
        const { name, species, description, image } = activeBirdInfo;
        return (
            <div className={styles.InfoBlock}>
                <div className={styles.InfoBlock__info}>
                    <div className={styles.InfoBlock__img}><img src={image} alt="bird"/></div>
                    <div className={styles.InfoBlock__player}>
                        <h4 className={styles.InfoBlock__title}>{name}</h4>
                        <div className={styles['InfoBlock__title-mini']}>{species}</div>
                        <div className={styles.Player}>{Player()}</div>
                    </div>
                </div>
                <div className={styles.InfoBlock__description}>{description}
                </div>
            </div>
        )
    }

    if (gameData.activeBirdInfo !== null) {
        return birdInfo()
    } else {
        return defaultInfo();
    }
};

export default InfoBlock;
