import {
    SET_ROUND,
    SET_ACTIVE_BIRD_INFO_ID,
    SET_TRUE_ANSWER,
    SET_POINTS,
} from '../types/action-types';

export const setRound = (state) => ({
    type: SET_ROUND,
    payload: state,
});

export const setActiveBirdInfoId = (state) => ({
    type: SET_ACTIVE_BIRD_INFO_ID,
    payload: state,
});

export const setTrueAnswer = (state) => ({
    type: SET_TRUE_ANSWER,
    payload: state,
});

export const setPointsData = (state) => ({
    type: SET_POINTS,
    payload: state,
})
