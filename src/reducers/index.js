import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import runtimeSettings from './runtimeSettings';
import authentication from './authentication';
import userDashboard from './userDashboard';
import dashboardUiStatus from './dashboardUiStatus';

const rootReducer = combineReducers({
    intl: intlReducer,
    runtimeSettings,
    authentication,
    userDashboard,
    dashboardUiStatus,
});

export default rootReducer;
