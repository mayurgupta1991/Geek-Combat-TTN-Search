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
                  name: 'google',
                  desc: 'Company',
                  src: 'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/p24x24/13592799_1361299897219221_6628637694680721779_n.jpg?oh=a2dae952a8fb43da52dbf4ca4f1b6b5f&oe=5A3CEE00',
              },
              2: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              3: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              4: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              5: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              6: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              7: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
              8: {
                  name: 'google',
                  desc: 'Company',
                  src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png',
              },
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

