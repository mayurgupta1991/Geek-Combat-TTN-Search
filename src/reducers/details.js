import deepFreeze from 'deep-freeze-es6';

import {
    SET_DETAILS,
} from '../constants';

function setDetail(state, { data }) {
    return { ...state, details: data };
}


export default function details(state = { result: {} }, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
        case SET_DETAILS: return setDetail(state, action);
        default: return state;
    }
}


