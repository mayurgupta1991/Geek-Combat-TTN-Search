import {
    GET_VIDEO_INFO,
    EMPTY_VIDEO_INFO_LIST,
    GET_VIDEO_CATEGORY,
    ADD_NEW_LINK_VIDEO,
    HANDLE_VIDEO_INPUT_CHANGE,
    DELETE_VIDEO_CONTENT,
    VALIDATE_LINK_VIDEOS_DATA,
    UPLOAD_PROPERTY_DETAILS,
    PROPERTY_STATUS_CHANGE,
    SORT_PROPERTY,
    PRE_POPULATE_LINK_VIDEO,
    EMPTY_ASSOCIATION_LIST,
    FETCH_DEVICE_LIST,
    UPDATE_LINKED_DEVICE,
    CREATE_PROPERTY_SEARCHED_LIST,
    EMPTY_PROPERTY_SEARCHED_LIST,
    EMPTY_DISPLAY_ORDER,
} from '../constants';

export function videoName(videoNames) {
    return {
        type: GET_VIDEO_INFO,
        videoNames,
    };
}

export function emptyVideoInfo() {
    return {
        type: EMPTY_VIDEO_INFO_LIST,
    };
}

export function videoCategories(videoCategory) {
    return {
        type: GET_VIDEO_CATEGORY,
        videoCategory,
    };
}

export function addNewContent(chosenData) {
    return {
        type: ADD_NEW_LINK_VIDEO,
        chosenData,
    };
}

export function handleContentInput(keyIndex, value, name) {
    return {
        type: HANDLE_VIDEO_INPUT_CHANGE,
        keyIndex,
        value,
        name,
    };
}

export function deleteLinkVideoContent(keyIndex) {
    return {
        type: DELETE_VIDEO_CONTENT,
        keyIndex,
    };
}

export function validateLinkVideosData() {
    return {
        type: VALIDATE_LINK_VIDEOS_DATA,
    };
}

export function uploadPropertyDetails(propertyInfo) {
    return {
        type: UPLOAD_PROPERTY_DETAILS,
        propertyInfo,
    };
}

export function changeStatus(propertyInfo) {
    return {
        type: PROPERTY_STATUS_CHANGE,
        propertyInfo,
    };
}

export function sortProperty(propertyList) {
    return {
        type: SORT_PROPERTY,
        propertyList,
    };
}

export function populateVideoAssociationList(data) {
    return {
        type: PRE_POPULATE_LINK_VIDEO,
        data,
    };
}

export function emptyVideoAssociationList() {
    return {
        type: EMPTY_ASSOCIATION_LIST,
    };
}

export function fetchDevices(data) {
    const allDeviceList = data.records;
    const linkedDeviceRecords = data.total;
    return {
        type: FETCH_DEVICE_LIST,
        allDeviceList,
        linkedDeviceRecords,
    };
}

export function updateLinkedDevice(enabled, deviceIndex) {
    return {
        type: UPDATE_LINKED_DEVICE,
        enabled,
        deviceIndex,
    };
}


export function createPropertyList(propertyList) {
    return {
        type: CREATE_PROPERTY_SEARCHED_LIST,
        propertyList,
    };
}

export function emptyPropertyList() {
    return {
        type: EMPTY_PROPERTY_SEARCHED_LIST,
    };
}

export function emptyDisplayOrder() {
    return {
        type: EMPTY_DISPLAY_ORDER,
    };
}

