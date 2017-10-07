import deepFreeze from 'deep-freeze-es6';

import {
    SET_SEARCH_RESULT,
} from '../constants';

function setSearchResult(state, { data }) {
  return { ...state, result: data };
}


export default function search(state = { result: [] }, action = {}) {
  deepFreeze(state);
  deepFreeze(action);

  switch (action.type) {
    case SET_SEARCH_RESULT: return setSearchResult(state, action);
    default: return state;
  }
}

