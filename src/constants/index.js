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
export const SET_DETAILS = 'SET_DETAILS';

export const SearchBarDummyData = [
    {
        title: 'HDFC IT',
        description: 'Company',
        imageLink: 'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/p24x24/13592799_1361299897219221_6628637694680721779_n.jpg?oh=a2dae952a8fb43da52dbf4ca4f1b6b5f&oe=5A3CEE00',
    },
    {
        title: 'HDFC Life',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/07f/283/290a400.png',
    },

    {
        title: 'HDFC Life - Insurance products - HDFC Life Showcase page',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/07f/283/290a400.png',
    },
    {
        title: 'HDFC Bank',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAxNAAAAJGVlYzI4MTFhLTIwZDctNGNmMC05ZWJkLTIxOGQ2Nzc3M2IzYg.png',
    },
    {
        title: 'HDFC Bank Ltd.',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_100_100/p/3/000/008/018/0b9d4b6.png',
    },
    {
        title: 'HDFC Limited',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/005/00c/124/3460995.png',
    },
    {
        title: 'HDFC Bank Ltd Mumbai',
        description: 'Company',
        imageLink: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/005/00c/124/3460995.png',
    },
];
