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


// current displayed Page

export const UPDATE_CURRENT_DISPLAY = 'UPDATE_CURRENT_DISPLAY';
export const FETCH_IMAGE_THUMBNAILS = 'FETCH_IMAGE_THUMBNAILS';
export const DELETE_IMAGE_THUMBNAILS = 'DELETE_IMAGE_THUMBNAILS';
export const BLOCK_UPLOAD_THUMBNAIL = 'BLOCK_UPLOAD_THUMBNAIL';
export const UNBLOCK_UPLOAD_THUMBNAIL = 'UNBLOCK_UPLOAD_THUMBNAIL';

export const PAGES = {
    VIDEOMANAGE: 0,
    VIDEOUPLOAD: 1,
    METATAGS: 2,
    USERS: 3,
    PROFILE: 4,
    PROPERTY: 5,
    DEVICES: 6,
    LINKDEVICE: 7,
    TOS: 8,
    POLICY: 9,
};

// sideBar Admin Menu

export const ADMIN_MENU_LIST = [
    {
        id: 'videoSection',
        icon: 'video_library',
        children: [
            { id: 'manageVideo', url: '/', index: 0 },
            { id: 'videoUpload', url: '/videoUpload', index: 1 },
            { id: 'tagsSubMenu', url: '/tags', index: 2 },
        ],
    },
    {
        id: 'users',
        icon: 'group',
        children: [
            { id: 'usersSubMenu', url: '/users', index: 3 },
            { id: 'profileSubMenu', url: '/profile', index: 4 },
        ],
    },
    {
        id: 'propertySection',
        icon: 'library_books',
        children: [
            { id: 'property', url: '/property', index: 5 },
        ],
    },
    {
        id: 'devices',
        icon: 'live_tv',
        children: [
            { id: 'deviceSubMenu', url: '/devices', index: 6 },
            { id: 'link', url: '/link', index: 7 },
        ],
    },
    {
        id: 'aboutSection',
        icon: 'description',
        children: [
            { id: 'tos', url: '/tos', index: 8 },
            { id: 'privacyPolicy', url: '/policy', index: 9 },
        ],
    },

];

// sideBar User Menu

export const GUEST_MENU_LIST = [
    {
        id: 'videoSection',
        icon: 'video_library',
        children: [
            { id: 'manageVideo', url: '/', index: 0 },
            { id: 'videoUpload', url: '/videoUpload', index: 1 },
        ],
    },
    {
        id: 'profileSection',
        icon: 'person',
        children: [
            { id: 'profileSubMenu', url: '/profile', index: 4 },
        ],
    },
    {
        id: 'aboutSection',
        icon: 'description',
        children: [
            { id: 'tos', url: '/tos', index: 8 },
            { id: 'privacyPolicy', url: '/policy', index: 9 },
        ],
    },
];

// sideBar Host Menu

export const HOST_MENU_LIST = [
    {
        id: 'videoSection',
        icon: 'video_library',
        children: [
            { id: 'manageVideo', url: '/', index: 0 },
            { id: 'videoUpload', url: '/videoUpload', index: 1 },
        ],
    },
    {
        id: 'profileSection',
        icon: 'person',
        children: [
            { id: 'profileSubMenu', url: '/profile', index: 4 },
        ],
    },
    {
        id: 'propertySection',
        icon: 'library_books',
        children: [
            { id: 'property', url: '/property', index: 5 },
        ],
    },
    {
        id: 'devices',
        icon: 'live_tv',
        children: [
            { id: 'link', url: '/link', index: 7 },
        ],
    },
    {
        id: 'aboutSection',
        icon: 'description',
        children: [
            { id: 'tos', url: '/tos', index: 8 },
            { id: 'privacyPolicy', url: '/policy', index: 9 },
        ],
    },
];

export const SEARCH_DROPDOWN_HEIGHT = 320;
export const SEARCHRESULT_HEIGHT = 32;
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
