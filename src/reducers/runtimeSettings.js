import deepFreeze from 'deep-freeze-es6';
import cloneDeep from 'lodash/cloneDeep';
import trim from 'lodash/trim';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';

import {
    LOGOUT_SUCCESS,
    SESSION_TERMINATED,
    UPDATE_CURRENT_DISPLAY,
    SET_COOKIE_URL,
} from '../constants';

const initialRuntimeSettings = {
    currentPage: -1,
    cookieUrl: '',
};

function setCookieLink(state, { cookieUrl }) {
    return { ...state, cookieUrl };
}

function updatePageToDisplay(state, { currentPage }) {
    return { ...state, currentPage };
}


export default function runtimeSettings(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case SESSION_TERMINATED:
    case LOGOUT_SUCCESS: return initialRuntimeSettings;
    case SET_COOKIE_URL: return setCookieLink(state, action);
    case UPDATE_CURRENT_DISPLAY: return updatePageToDisplay(state, action);
    default: return state;
    }
}
