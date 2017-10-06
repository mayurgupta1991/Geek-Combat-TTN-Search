import { fetchWebApi } from '../../webapis/dashboard';
import { getAccessToken } from '../../StoreHelper';
import { handleFetchError } from '../../util/errorHandler';
import { createCountry, createState, createRegion, createCity } from '../locationList';
import endpoints from '../../endpoints/locationManagement';

export function fetchCountryList() {
    const url = endpoints.countryPath;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
        .then(response => {
            dispatch(createCountry(response.data));
            return response;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return error;
        });
}

export function fetchStateList(countryId) {
    const url = `${endpoints.countryPath}/${countryId}/state`;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
        .then(response => {
            dispatch(createState(response.data));
            return response;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return error;
        });
}

export function fetchRegionList(stateId) {
    const url = `${endpoints.statePath}/${stateId}/region`;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
        .then(response => {
            dispatch(createRegion(response.data));
            return response;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return error;
        });
}

export function fetchCityList({ stateId, regionId, citySearchText }) {
    const url = `${endpoints.statePath}/${stateId}/city?name=${citySearchText}&&regionid=${regionId}`;
    return (dispatch, getState) => {
        const currentCities = fetchWebApi(getAccessToken(getState), url);
        currentCities.request.then(response => {
            dispatch(createCity(response.data));
        }).catch(error => {
            handleFetchError(error, dispatch);
        });
        return currentCities;
    };
}

export function getCityName(cityId) {
    const url = `${endpoints.cityPath}/${cityId}`;
    return (dispatch, getState) => fetchWebApi(getAccessToken(getState), url).request
        .then(response => {
            dispatch(createCity([response.data]));
            return response.data.name;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
        });
}

