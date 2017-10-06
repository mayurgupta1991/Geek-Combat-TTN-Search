// authentication

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SESSION_TERMINATED = 'SESSION_TERMINATED';
export const SET_COOKIE_URL = 'SET_COOKIE_URL';
export const CHANGE_UNAUTH_VIEW = 'CHANGE_UNAUTH_VIEW';

// dashboards

export const CHANGE_DASHBOARD_LOADING_STATUS = 'CHANGE_DASHBOARD_LOADING_STATUS';
export const USER_DASHBOARD_RECEIVED = 'USER_DASHBOARD_RECEIVED';
export const UPDATE_USER_DASHBOARD = 'UPDATE_USER_DASHBOARD';
export const UPDATE_PROFILE_PICTURE = 'UPDATE_PROFILE_PICTURE';


// browserStorage

export const BROWSER_STORAGE = {
    ACCESS_TOKEN: 'access_token',
};

// user roles

export const USER_TYPE = {
    GUEST: 'GUEST',
    OPERATOR: 'OPERATOR',
    ADMIN: 'ADMIN',
    HOST: 'HOST',
    VENDOR: 'VENDOR',
};

// Header Min-Height

export const headerHeight = 57;

export const SEARCH_DROPDOWN_HEIGHT = 320;
export const SEARCHRESULT_HEIGHT = 32;
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
