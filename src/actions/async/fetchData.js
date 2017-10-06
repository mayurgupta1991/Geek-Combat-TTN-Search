import endpoints from '../../endpoints/userDashboard';
import { fetchWebApi, postAuthApi } from '../../webapis/dashboard';
import { getAccessToken } from '../../StoreHelper';
import { handleFetchError } from '../../util/errorHandler';
import { userDashboard } from '../userDashboard';
import { terminateSession } from '../configSettings';
import { removeUserStorage } from '../../util/browserStorage';
import { setSearchResult } from '../search';

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

export function fetchSearchResult() {
    const url = endpoints.userInfoPath;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
      .then(response => {
          const data = {
              1: {
                  name: 'Company 1',
                  desc: 'BLAHHH BLAHHH BLAHH'
              },
              2: {
                  name: 'Company 2',
                  desc: 'BLAHHH BLAHHH BLAHH'
              },
              3: {
                  name: 'Company 3',
                  desc: 'BLAHHH BAHHH BLAHH'
              },
              4: {
                  name: 'Company 4',
                  desc: 'BLAHHH BLAHHH BLAHH'
              },
              5: {
                  name: 'Company 5',
                  desc: 'BLAHHH BLAHHH BLAHH'
              }
          };
          dispatch(setSearchResult(data));
          return response;
      })
      .catch(error => {
          removeUserStorage();
          dispatch(terminateSession());
          return error;
      });
}

