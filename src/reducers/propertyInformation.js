import deepFreeze from 'deep-freeze-es6';
import cloneDeep from 'lodash/cloneDeep';
import trim from 'lodash/trim';

import {
    LOGOUT_SUCCESS,
    SESSION_TERMINATED,
    GET_VIDEO_INFO,
    GET_VIDEO_CATEGORY,
    ADD_NEW_LINK_VIDEO,
    HANDLE_VIDEO_INPUT_CHANGE,
    DELETE_VIDEO_CONTENT,
    VALIDATE_LINK_VIDEOS_DATA,
    UPLOAD_PROPERTY_DETAILS,
    SORT_PROPERTY,
    PRE_POPULATE_LINK_VIDEO,
    PROPERTY_STATUS_CHANGE,
    EMPTY_ASSOCIATION_LIST,
    FETCH_DEVICE_LIST,
    UPDATE_LINKED_DEVICE,
    EMPTY_VIDEO_INFO_LIST,
    CREATE_PROPERTY_SEARCHED_LIST,
    EMPTY_PROPERTY_SEARCHED_LIST,
    EMPTY_DISPLAY_ORDER,
} from '../constants';

const initialRuntimeSettings = {
    propertyList: [],
    prePopulatedPropertyData: [],
    videoAssociationList: [],
    videoNameHintSearch: [],
    videoCategory: [],
    displayOrderCategory: [],
    isAllDataValid: false,
    allDeviceList: [],
    propertySearchedList: [],
    linkedDeviceRecords: 0,
};


function createPropertyList(state, { records, total }) {
    return { ...state, propertyList: [...records], totalProperties: total };
}

function getVideoInformation(state, { records }) {
    return { ...state, videoNameHintSearch: [...records] };
}

function emptyVideoInformation(state) {
    return { ...state, videoNameHintSearch: [] };
}

function getVideoCategory(state, { videoCategory }) {
    return { ...state, videoCategory: [...videoCategory] };
}

function prepopulateLinkVideoData(state, { data }) {
    const displayOrderCategory = [];
    const assosiationData = data.map(item => {
        return { ...item, isValid: false, validationCheck: false, orderValidationCheck: false };
    });
    data.forEach((item, i) => displayOrderCategory.push(i + 1));
    return { ...state, videoAssociationList: assosiationData, displayOrderCategory };
}
function addNewContent(state, { chosenData }) {
    const orderCategory = state.displayOrderCategory;
    const newRow = {
        categoryId: '',
        contentId: chosenData.id,
        contentName: chosenData.name,
        order: '',
        orderValidationCheck: false,
        isValid: false,
        validationCheck: false,
    };
    const videoAssociationList = [...state.videoAssociationList, newRow];
    return { ...state, videoAssociationList, displayOrderCategory: [...orderCategory, videoAssociationList.length] };
}

function onChangeErrorHandling(videoAssociationList, orderCategory, deleteRow = false) {
    for (let i = videoAssociationList.length - 1; i >= 0; i -= 1) {
        for (let j = 0; j < videoAssociationList.length; j += 1) {
            if (
                videoAssociationList[j].contentId === videoAssociationList[i].contentId &&
                videoAssociationList[j].categoryId === videoAssociationList[i].categoryId
            ) {
                if (i !== j && videoAssociationList[j].categoryId !== '') {
                    videoAssociationList[j].validationCheck = true;
                    videoAssociationList[j].isValid = false;
                } else {
                    videoAssociationList[j].validationCheck = false;
                    videoAssociationList[j].isValid = true;
                }
            }
            if (videoAssociationList[j].order === videoAssociationList[i].order) {
                if (i !== j && videoAssociationList[j].order !== '') {
                    videoAssociationList[j].orderValidationCheck = true;
                    videoAssociationList[j].isValid = false;
                } else {
                    videoAssociationList[j].orderValidationCheck = false;
                    videoAssociationList[j].isValid = true;
                }
            }
        }
        if (deleteRow && videoAssociationList[i].order > orderCategory.length - 1) {
            videoAssociationList[i].order = '';
        }
    }
    return videoAssociationList;
}

function handleContentInput(state, { keyIndex, value, name }) {
    const videoAssociationList = cloneDeep(state.videoAssociationList);
    videoAssociationList[keyIndex][name] = value;
    const videoAssociationListUpdate = onChangeErrorHandling(videoAssociationList);
    return { ...state, videoAssociationList: videoAssociationListUpdate };
}

function deleteVideoContent(state, { keyIndex }) {
    const orderCategory = cloneDeep(state.displayOrderCategory);
    const videoAssociationList = cloneDeep(state.videoAssociationList);
    const updateVideoAssociationData = [
        ...videoAssociationList.slice(0, keyIndex),
        ...videoAssociationList.slice(keyIndex + 1),
    ];
    const newVideoAssociationData = onChangeErrorHandling(updateVideoAssociationData, orderCategory, true);
    orderCategory.pop();
    return { ...state, videoAssociationList: newVideoAssociationData, displayOrderCategory: orderCategory };
}

function validateLinkVideos(state) {
    let isAllDataValid = true;
    const updatedData = cloneDeep(state.videoAssociationList).map(item => {
        if (!trim(item.categoryId) || !item.contentId || item.validationCheck) {
            item.validationCheck = true;
            item.isValid = false;
            isAllDataValid = false;
        } else if (!item.order || item.orderValidationCheck || !trim(item.order)) {
            item.orderValidationCheck = true;
            item.isValid = false;
            isAllDataValid = false;
        } else {
            item.validationCheck = false;
            item.orderValidationCheck = false;
            item.isValid = true;
        }
        return item;
    });

    return { ...state, videoAssociationList: updatedData, isAllDataValid };
}

function propertyStatusChange(state, { propertyInfo }) {
    const propertyList = cloneDeep(state.propertyList);
    const newPropertyList = propertyList.map(list => {
        if (list.id === propertyInfo.data.id) {
            list = propertyInfo.data;
        }
        return list;
    });
    return { ...state, propertyList: newPropertyList };
}

function uploadPropertyInformation(state, { propertyInfo }) {
    return { ...state, prePopulatedPropertyData: propertyInfo, isAllDataValid: false, videoAssociationList: [] };
}

function emptyAssociationList(state) {
    return { ...state, videoAssociationList: [] };
}

function fetchDevicesList(state, { allDeviceList, linkedDeviceRecords }) {
    return { ...state, allDeviceList, linkedDeviceRecords };
}


function updateDevicesList(state, { enabled, deviceIndex }) {
    const updatedDeviceInfo = { ...state.allDeviceList[deviceIndex], enabled };
    const updatedDeviceList = [
        ...state.allDeviceList.slice(0, deviceIndex),
        updatedDeviceInfo,
        ...state.allDeviceList.slice(deviceIndex + 1),
    ];
    return { ...state, allDeviceList: updatedDeviceList };
}

function createSearchedProperty(state, { propertyList }) {
    return { ...state, propertySearchedList: [...propertyList] };
}

function resetSearchedProperty(state) {
    return { ...state, propertySearchedList: [] };
}

function resetVideoOrder(state) {
    return { ...state, displayOrderCategory: [] };
}

export default function propertyInformation(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case SESSION_TERMINATED:
    case LOGOUT_SUCCESS: return initialRuntimeSettings;
    case GET_VIDEO_INFO: return getVideoInformation(state, action.videoNames);
    case EMPTY_VIDEO_INFO_LIST: return emptyVideoInformation(state);
    case GET_VIDEO_CATEGORY: return getVideoCategory(state, action);
    case ADD_NEW_LINK_VIDEO: return addNewContent(state, action);
    case HANDLE_VIDEO_INPUT_CHANGE: return handleContentInput(state, action);
    case DELETE_VIDEO_CONTENT: return deleteVideoContent(state, action);
    case VALIDATE_LINK_VIDEOS_DATA: return validateLinkVideos(state);
    case UPLOAD_PROPERTY_DETAILS: return uploadPropertyInformation(state, action);
    case SORT_PROPERTY: return createPropertyList(state, action.propertyList);
    case PRE_POPULATE_LINK_VIDEO: return prepopulateLinkVideoData(state, action);
    case PROPERTY_STATUS_CHANGE: return propertyStatusChange(state, action);
    case EMPTY_ASSOCIATION_LIST: return emptyAssociationList(state);
    case FETCH_DEVICE_LIST: return fetchDevicesList(state, action);
    case UPDATE_LINKED_DEVICE: return updateDevicesList(state, action);
    case CREATE_PROPERTY_SEARCHED_LIST: return createSearchedProperty(state, action);
    case EMPTY_PROPERTY_SEARCHED_LIST: return resetSearchedProperty(state, action);
    case EMPTY_DISPLAY_ORDER: return resetVideoOrder(state);
    default: return state;
    }
}
