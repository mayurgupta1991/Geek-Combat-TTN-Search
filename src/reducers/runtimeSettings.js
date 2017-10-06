import deepFreeze from 'deep-freeze-es6';
import cloneDeep from 'lodash/cloneDeep';
import trim from 'lodash/trim';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';

import {
    LOGOUT_SUCCESS,
    SESSION_TERMINATED,
    SET_COOKIE_URL,
} from '../constants';

const initialRuntimeSettings = {
    cookieUrl: '',
};

function setCookieLink(state, { cookieUrl }) {
    return { ...state, cookieUrl };
}

export default function runtimeSettings(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case SESSION_TERMINATED:
    case LOGOUT_SUCCESS: return initialRuntimeSettings;
    case SET_COOKIE_URL: return setCookieLink(state, action);
    default: return state;
    }
}
