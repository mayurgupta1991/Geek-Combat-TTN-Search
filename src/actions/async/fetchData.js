import endpoints from '../../endpoints/userDashboard';
import { fetchWebApi, postAuthApi } from '../../webapis/dashboard';
import { getAccessToken } from '../../StoreHelper';
import { handleFetchError } from '../../util/errorHandler';
import { userDashboard } from '../userDashboard';
import { terminateSession } from '../configSettings';
import { removeUserStorage } from '../../util/browserStorage';
import { setSearchResult } from '../search';
import { SearchBarDummyData } from '../../constants'

export function createUser(data) {
    const url = endpoints.createUserPath;
    return dispatch => postAuthApi(url, data).request
        .then(response => {
            return response;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return { error };
        });
}


export function verifyUser(data) {
    const url = endpoints.verifyUserPath;
    return dispatch => postAuthApi(url, data).request
        .then(response => {
            return response.status;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return error;
        });
}

export function fetchUserAndLoadData() {
    const url = endpoints.userInfoPath;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
        .then(response => {
            dispatch(userDashboard(response.data));
            return response;
        })
        .catch(error => {
            removeUserStorage();
            dispatch(terminateSession());
            return error;
        });
}

export function fetchSearchResult(searchQuery) {
    const url = endpoints.userInfoPath;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
      .then(response => {
         // dispatch(setSearchResult(response.data.data));
          dispatch(setSearchResult(SearchBarDummyData));
          // return response;
      })
      .catch(error => {
           // dispatch(setSearchResult(SearchBarDummyData));
            console.log(error);
          /*removeUserStorage();
          dispatch(terminateSession());
          return error;*/
      });
}

