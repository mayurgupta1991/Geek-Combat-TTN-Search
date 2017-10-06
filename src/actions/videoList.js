import {
    CREATE_VIDEO_LIST,
    CREATE_VIDEO_ACTIONS,
    CREATE_VIDEO_DATA,
    UPDATE_VIDEO_LIST,
    UPDATE_CURRENT_ACTION_SEARCH,
    EMPTY_DOWNLOAD_LINK_DATA,
    CREATE_DOWNLOAD_LINK_DATA,
    CREATE_PUBLIC_VIDEOS,
} from '../constants';

export function createVideoList({ records, total }) {
    return {
        type: CREATE_VIDEO_LIST,
        allVideos: records || [],
        totalVideos: total || 0,
    };
}

export function updateVideoList(videoData, videoIndex) {
    return {
        type: UPDATE_VIDEO_LIST,
        videoData,
        videoIndex,
    };
}

export function updateSearchAction(currentSearchAction) {
    return {
        type: UPDATE_CURRENT_ACTION_SEARCH,
        currentSearchAction,
    };
}

export function createVideoActions(actions) {
    return {
        type: CREATE_VIDEO_ACTIONS,
        actions,
    };
}

export function createVideoData(videoData) {
    return {
        type: CREATE_VIDEO_DATA,
        videoData,
    };
}

export function emptyPrepopulatedDownloads() {
    return {
        type: EMPTY_DOWNLOAD_LINK_DATA,
    };
}

export function createDownloadUrlsLinks(downloadLinks) {
    return {
        type: CREATE_DOWNLOAD_LINK_DATA,
        downloadLinks,
    };
}

export function createPublicVideoList({ videoList, totalRecords }, newVideos) {
    return {
        type: CREATE_PUBLIC_VIDEOS,
        videoList,
        totalRecords,
        newVideos,
    };
}
