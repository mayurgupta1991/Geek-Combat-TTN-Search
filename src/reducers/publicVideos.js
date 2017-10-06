import deepFreeze from 'deep-freeze-es6';
import {
    CREATE_PUBLIC_VIDEOS,
} from '../constants';

const initialRuntimeSettings = {
    videoList: [],
    totalRecords: 0,
    newVideos: {},
};

function createVideoList(state, { videoList, totalRecords, newVideos }) {
    return { ...state, videoList, totalRecords, newVideos };
}

export default function publicVideos(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case CREATE_PUBLIC_VIDEOS: return createVideoList(state, action);
    default: return state;
    }
}
