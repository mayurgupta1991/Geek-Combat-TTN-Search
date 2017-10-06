import {
    CHANGE_DASHBOARD_LOADING_STATUS,
    GET_LANGUAGES,
    SET_COOKIE_URL,
    CHANGE_UNAUTH_VIEW,
} from '../constants';

export function changeDashboardLoadingStatus({ status }) {
    return {
        type: CHANGE_DASHBOARD_LOADING_STATUS,
        status,
    };
}

export function fetchLanguageData(languages) {
    return {
        type: GET_LANGUAGES,
        languages,
    };
}

export function setEnableCookieUrl(cookieUrl) {
    return {
        type: SET_COOKIE_URL,
        cookieUrl,
    };
}

export function changeAuthForgot(updatedView) {
    return {
        type: CHANGE_UNAUTH_VIEW,
        updatedView,
    };
}
