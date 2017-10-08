import { postDashboardWebApi } from '../../webapis/dashboard';
import { getAccessToken } from '../../StoreHelper';

export function postData(data) {
    return (dispatch, getState) => postDashboardWebApi(getAccessToken(getState), 'http://10.1.12.73:9090/project/save', data).request
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}
