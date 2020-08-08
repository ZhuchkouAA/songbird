import {
    SET_ROUND,
    SET_ACTIVE_BIRD_INFO_ID,
} from '../actions/types/action-types';
import getRandomNumber from "../../helpers/getRandomNumber";

export type GameDataType = {
    round: number
    activeBirdInfo: number | null
    isTrueAnswer: boolean
    hiddenBird: number
}

const initialState: GameDataType = {
    round: 0,
    hiddenBird: getRandomNumber(0, 5),
    activeBirdInfo: null,
    isTrueAnswer: false,
};

const gameDataReducer = (state = initialState, { type, payload }:any) => {
    switch (type) {
        case SET_ROUND:
            return {
                ...state,
                round: payload,
            };
        case SET_ACTIVE_BIRD_INFO_ID:
            return {
                ...state,
                activeBirdInfo: payload,
            };
        default:
            return state;
    }
};

export default gameDataReducer;
