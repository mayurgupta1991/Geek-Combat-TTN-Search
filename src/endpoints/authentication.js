import { apiUrl } from '../constants/apiConstant';

export default({
    loginPath: apiUrl.AUTH + apiUrl.authentication,
    userInfoPath: apiUrl.BASE + apiUrl.getUserInfo,
    GOOGLE_CLIENT_ID: apiUrl.GOOGLE_CLIENT_ID,
    googleAuthPath: apiUrl.BASE + apiUrl.GPLUS_AUTH,
    AWS_CONFIG: apiUrl.AWS_CONFIG,
    validateTokenPath: apiUrl.BASE + apiUrl.getUserInfo + apiUrl.validateToken,
});
