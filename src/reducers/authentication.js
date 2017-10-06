import deepFreeze from 'deep-freeze-es6';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    SESSION_TERMINATED,
    CHANGE_UNAUTH_VIEW,
} from '../constants';

const initialState = {
    userLoggedIn: false,
    accessToken: '',
    errorMsg: '',
    showForgotPassword: false,
    showRegister: false,
};

function setToken(state, { token }) {
    return { ...state, userLoggedIn: true, accessToken: token, errorMsg: '' };
}

function setLoginError(state, { error }) {
    return { ...state, userLoggedIn: false, errorMsg: error.message };
}

function resetData(state) {
    return { ...state, ...initialState };
}

function updateView(state, { showForgotPassword, showRegister }) {
    return { ...state, showForgotPassword, showRegister };
}

export default function authentication(state = initialState, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case SESSION_TERMINATED:
    case LOGOUT_SUCCESS: return resetData(state);
    case LOGIN_SUCCESS: return setToken(state, action);
    case LOGIN_FAILURE: return setLoginError(state, action);
    case CHANGE_UNAUTH_VIEW: return updateView(state, action.updatedView);
    default: return state;
    }
}

