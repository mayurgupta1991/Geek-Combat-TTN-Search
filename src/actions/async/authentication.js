import { postAuthApi } from '../../webapis/dashboard';
import { tokenGenerator, loginError, logOutUser } from '../configSettings';
import { setUserStorage, removeUserStorage } from '../../util/browserStorage';
import { handleFetchError } from '../../util/errorHandler';

function setToken(dispatch, data) {
    dispatch(tokenGenerator(data));
    setUserStorage(data);
}

export function socialLogin(url, data) {
    return dispatch => postAuthApi(url, data).request
        .then(response => {
            setToken(dispatch, response.data);
            return response;
        })
        .catch(error => {
            dispatch(loginError(error));
            handleFetchError(error, dispatch);
            return error.response;
        });
}

export function logOut() {
    removeUserStorage();
    return dispatch => {
        dispatch(logOutUser());
    };
}
