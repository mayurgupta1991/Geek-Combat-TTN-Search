import {
    USER_DASHBOARD_RECEIVED,
} from '../constants';


export function userDashboard(dashboard) {
    return {
        type: USER_DASHBOARD_RECEIVED,
        dashboard,
    };
}
