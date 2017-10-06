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

// content search

export const RESET_FILTERS = 'RESET_FILTERS';
export const FETCH_FILTERS = 'FETCH_FILTERS';
export const FILTER_CHANGE = 'FILTER_CHANGE';
export const DELETE_FILTER_ACTION = 'DELETE_FILTER_ACTION';
export const APPLY_FILTER_ACTION = 'APPLY_FILTER_ACTION';
export const DELETE_APPLIED_FILTER_ACTION = 'DELETE_APPLIED_FILTER_ACTION';
export const HANDLE_INPUT_FEILD_CHANGE = 'HANDLE_INPUT_FEILD_CHANGE';

// runTimeSettings

export const CREATE_VIDEO_UPLOAD_DATA = 'CREATE_VIDEO_UPLOAD_DATA';
export const GET_LANGUAGES = 'GET_LANGUAGES';
export const ADD_NEW_CONTENT = 'ADD_NEW_CONTENT';
export const DELETE_CONTENT = 'DELETE_CONTENT';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const LANGUAGE_INPUT_CHANGE = 'LANGUAGE_INPUT_CHANGE';
export const ENABLE_VALIDATIONS = 'ENABLE_VALIDATIONS';
export const UPDATE_LOCAL_DATA = 'UPDATE_LOCAL_DATA';
export const RADIO_INPUT_CHANGE = 'RADIO_INPUT_CHANGE';
export const CREATE_VIDEO_CONTENT_TYPE = 'CREATE_VIDEO_CONTENT_TYPE';
export const SET_ISVALID_FALSE = 'SET_ISVALID_FALSE';
export const EMPTY_LOCALINFO_DATA = 'EMPTY_LOCALINFO_DATA';
export const RESET_LOCALINFO_DATA = 'RESET_LOCALINFO_DATA';

// metaTags constants

export const SEARCH_METATAG = 'SEARCH_METATAG';
export const DELETE_METATAG = 'DELETE_METATAG';
export const CHANGE_METATAG_VALUE = 'CHANGE_METATAG_VALUE';
export const PRE_POPULATE_METATAGS = 'PRE_POPULATE_METATAGS';
export const VALIDATE_AND_UPDATE_UPLOAD_DATA = 'VALIDATE_AND_UPDATE_UPLOAD_DATA';

// deviceManagement constants

export const CREATE_DEVICE_LIST = 'CREATE_DEVICE_LIST';
export const SORT_DEVICE_LIST = 'SORT_DEVICE_LIST';
export const UPDATE_DEVICE_LIST = 'UPDATE_DEVICE_LIST';
export const FETCH_DEVICE_INFO = 'FETCH_DEVICE_INFO';

// videoManagement Constants

export const CREATE_VIDEO_LIST = 'CREATE_VIDEO_LIST';
export const UPDATE_VIDEO_LIST = 'UPDATE_VIDEO_LIST';
export const UPDATE_CURRENT_ACTION_SEARCH = 'UPDATE_CURRENT_ACTION_SEARCH';
export const CREATE_VIDEO_ACTIONS = 'CREATE_VIDEO_ACTIONS';
export const CREATE_VIDEO_DATA = 'CREATE_VIDEO_DATA';
export const UPDATE_VIDEO_DATA = 'UPDATE_VIDEO_DATA';
export const UPDATE_VIDEO_THUMBNAIL_ID = 'UPDATE_VIDEO_THUMBNAIL_ID';
export const CREATE_DOWNLOAD_LINK_DATA = 'CREATE_DOWNLOAD_LINK_DATA';
export const EMPTY_DOWNLOAD_LINK_DATA = ' EMPTY_DOWNLOAD_LINK_DATA';
export const CREATE_PUBLIC_VIDEOS = ' CREATE_PUBLIC_VIDEOS';

// Autocomplete-upload-form configSettings

export const AUTO_COMPLETE_SOURCE_CONFIG = {
    text: 'tagname',
    value: 'tagid',
};

// Autocomplete-property-form configSettings

export const AUTO_COMPLETE_PROPERTY_SOURCE_CONFIG = {
    text: 'name',
    value: 'id',
    description: 'description',
};

// Autocomplete-city-form configSettings

export const AUTO_COMPLETE_CITY_SOURCE_CONFIG = {
    text: 'name',
    value: 'id',
};

// Autocomplete-property-form configSettings

export const AUTO_COMPLETE_PROPERTY_SEARCH_SOURCE_CONFIG = {
    text: 'name',
    value: 'id',
};

// form-page validation

export const VALIDATE_FORM_PAGE = 'VALIDATE_FORM_PAGE';

// property Information

export const GET_VIDEO_INFO = 'GET_VIDEO_INFO';
export const EMPTY_VIDEO_INFO_LIST = 'EMPTY_VIDEO_INFO_LIST';
export const GET_VIDEO_CATEGORY = 'GET_VIDEO_CATEGORY';
export const HANDLE_VIDEO_INPUT_CHANGE = 'HANDLE_VIDEO_INPUT_CHANGE';
export const DELETE_VIDEO_CONTENT = 'DELETE_VIDEO_CONTENT';
export const VALIDATE_LINK_VIDEOS_DATA = 'VALIDATE_LINK_VIDEOS_DATA';
export const UPLOAD_PROPERTY_DETAILS = 'UPLOAD_PROPERTY_DETAILS';
export const PROPERTY_STATUS_CHANGE = 'PROPERTY_STATUS_CHANGE';
export const SORT_PROPERTY = 'SORT_PROPERTY';
export const EMPTY_DISPLAY_ORDER = 'EMPTY_DISPLAY_ORDER';
export const PRE_POPULATE_LINK_VIDEO = 'PRE_POPULATE_LINK_VIDEO';
export const EMPTY_ASSOCIATION_LIST = 'EMPTY_ASSOCIATION_LIST';
export const ADD_NEW_LINK_VIDEO = 'ADD_NEW_LINK_VIDEO';
export const FETCH_DEVICE_LIST = 'FETCH_DEVICE_LIST';
export const UPDATE_LINKED_DEVICE = 'UPDATE_LINKED_DEVICE';
export const CREATE_PROPERTY_SEARCHED_LIST = 'CREATE_PROPERTY_SEARCHED_LIST';
export const EMPTY_PROPERTY_SEARCHED_LIST = 'EMPTY_PROPERTY_SEARCHED_LIST';

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

// SearchDropDown menu list used in SearchBar component

export const SELECT_MENU_LIST = [
    { name: '0', description: 'all' },
    { name: '1', description: 'enable' },
    { name: '2', description: 'disable' },
];

export const SELECT_MENU_LIST_DEVICE = [
    { name: '0', description: 'all' },
    { name: '1', description: 'enable' },
    { name: '2', description: 'disable' },
    { name: '3', description: 'linked' },
    { name: '4', description: 'notLinked' },
];

// user lists

export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_ROLES = 'GET_ROLES';
export const SORT_USER_LIST = 'SORT_USER_LIST';

// meta-tags lists

export const UPDATE_TAG_STATUS = 'UPDATE_TAG_STATUS';
export const UPDATE_TAG = 'UPDATE_TAG';
export const SORT_TAG_LIST = 'SORT_TAG_LIST';

// user-location lists

export const CREATE_COUNTRY_LIST = 'CREATE_COUNTRY_LIST';
export const CREATE_STATE_LIST = 'CREATE_STATE_LIST';
export const CREATE_REGION_LIST = 'CREATE_REGION_LIST';
export const CREATE_CITY_LIST = 'CREATE_CITY_LIST';
export const EMPTY_CITY_LIST = 'EMPTY_CITY_LIST';

// thumbnails management

export const UPLOAD_IMAGE_THUMBNAILS = 'UPLOAD_IMAGE_THUMBNAILS';

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


export const staticData = {
    'host videos': [
        {
            videoName: 'Cable Car Museum',
            videoDescription: 'Cable Car Museum',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Lands End',
            videoDescription: 'Lands End',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Lombard Street',
            videoDescription: 'Lombard Street',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Santa Cruz',
            videoDescription: 'xxxx asd ad  ads',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Santa Cruz Boardwalk',
            videoDescription: 'xxxxxasd as das asd asd ',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
    ],
    neighbourhood: [
        {
            videoName: 'California Academy of Sciences',
            videoDescription: 'asd as as ad asd ',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Yosemite National Park',
            videoDescription: 'asd asd asad sds',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
    ],
    cities: [
        {
            videoName: 'Golden Gate Park',
            videoDescription: 'sada  aa s da ',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Yosemite National Park',
            videoDescription: 'asd asd asad sds',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
    ],
    'day trips': [
        {
            videoName: 'Golden Gate Park',
            videoDescription: 'sada  aa s da ',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
        {
            videoName: 'Yosemite National Park',
            videoDescription: 'asd asd asad sds',
            videoUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Roku/MasterPlaylist.m3u8',
            thumbnailUrl: 'http://ddy0izq7lo815.cloudfront.net/US/California/San_Ramon_Village/Property/Videos/big_buck_bunny_480p_1mb_(1)_September26th2017113459am/Thumbnails/Thumbnail_1_Cable Car Museum - San Francisco - CA - 2017 - smaller.png',
        },
    ],
};
