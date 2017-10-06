import {
    SET_SEARCH_RESULT
} from '../constants';

export function setSearchResult(data) {
    return {
        type: SET_SEARCH_RESULT,
        data,
    };
}

