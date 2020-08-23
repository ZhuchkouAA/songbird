import {
    SET_ROUND,
    SET_ACTIVE_BIRD_INFO_ID,
    SET_TRUE_ANSWER,
    SET_POINTS,
} from '../actions/types/action-types';
import getRandomNumber from "../../helpers/getRandomNumber";
import birdsData from "../../constants/birdsData";

export type GameDataType = {
    round: number
    activeBirdInfo: number | null
    isTrueAnswer: boolean
    hiddenBird: number
    points: number
    isEndGame: boolean
}

const initialState: GameDataType = {
    round: 0,
    hiddenBird: getRandomNumber(0, 5),
    activeBirdInfo: null,
    isTrueAnswer: false,
    points: 0,
    isEndGame: false,
};

const gameDataReducer = (state = initialState, { type, payload }:any) => {
    switch (type) {
        case SET_ROUND:
            const isEnd = payload > birdsData.length - 1;
            const roundNumber = isEnd ? 1 : payload;
            return {
                ...state,
                round: roundNumber,
                isTrueAnswer: false,
                activeBirdInfo: null,
                hiddenBird: getRandomNumber(0, 5),
                isEndGame: isEnd,
            };
        case SET_ACTIVE_BIRD_INFO_ID:
            return {
                ...state,
                activeBirdInfo: payload,
            };
        case SET_TRUE_ANSWER:
            return {
                ...state,
                isTrueAnswer: payload,
            }
        case SET_POINTS:
            return {
                ...state,
                points: payload,
            }
        default:
            return state;
    }
};

export default gameDataReducer;
