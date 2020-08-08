import {
    SET_ROUND,
    SET_ACTIVE_BIRD_INFO_ID,
} from '../types/action-types';

export const setRound = (state) => ({
    type: SET_ROUND,
    payload: state,
});

export const setActiveBirdInfoId = (state) => ({
    type: SET_ACTIVE_BIRD_INFO_ID,
    payload: state,
});
