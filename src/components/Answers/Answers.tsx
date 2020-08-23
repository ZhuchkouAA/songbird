import React, { useState, useEffect } from 'react';

import birdsData from "../../constants/birdsData";
import { GameDataType } from '../../redux/reducers/game-data-reducer';
// @ts-ignore
import correctSound from '../../sounds/correct-answer.mp3';
// @ts-ignore
import incorrectSound from '../../sounds/incorrect-sound.mp3';
import styles from './Answers.module.scss';

type AnswersType = {
    gameData: GameDataType
}

const Answers = (props:any) => {
    const { gameData }:AnswersType = props;
    const { setTrueAnswer }:any = props;
    const { setActiveBirdInfoId }:any = props;
    const { setPointsData }:any = props;

    const correctAnswerSound = new Audio(correctSound);
    const incorrectAnswerSound = new Audio(incorrectSound);

    const playSound = (sound:any) => {
        sound.play();
    };

    const initialClass = styles.Answers__point;
    const initialPointsCreator = () => {
        const initialPoints = new Array(birdsData[gameData.round].length);
        initialPoints.fill(initialClass);
        return initialPoints;
    }

    const initialPointsPerAnswer = 5;

    const [marks, setMarks] = useState(initialPointsCreator());
    const [pointsPerAnswer, setPointsPerAnswer] = useState(initialPointsPerAnswer);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        setMarks(initialPointsCreator());
        setPointsPerAnswer(initialPointsPerAnswer);
    }, [gameData.round]);

    const handleClick = (id:number) => {
        setActiveBirdInfoId(id);
        if (gameData.isTrueAnswer) return;

        const newPointsData = marks;
        const isTrueAnswer = id === gameData.hiddenBird;

        if (isTrueAnswer) {
            setPoints(points + pointsPerAnswer);
            setPointsData(points + pointsPerAnswer);
            playSound(correctAnswerSound);
            newPointsData[id] = styles.Answers__point_correct;
            setTrueAnswer(isTrueAnswer);
        } else if (marks[id] === initialClass){
            setPointsPerAnswer(pointsPerAnswer - 1);
            playSound(incorrectAnswerSound);
            newPointsData[id] = styles.Answers__point_incorrect;
            setTrueAnswer(isTrueAnswer);
        }

        setMarks(newPointsData);
    }

    const AnswersElements = birdsData[gameData.round].map((bird) => {
        return <li key={bird.id - 1} onClick={() => handleClick(bird.id - 1)}>
            <span className={marks[bird.id - 1]}></span>{bird.name}
        </li>
    })

  return (
      <ul className={styles.Answers}>
          {AnswersElements}
      </ul>
  );
};

export default Answers;
