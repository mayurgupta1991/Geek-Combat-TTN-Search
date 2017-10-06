import { apiUrl } from '../constants/apiConstant';

export default({
    userInfoPath: apiUrl.BASE + apiUrl.getUserInfo,
    createUserPath: apiUrl.BASE + apiUrl.getUserInfo + apiUrl.register,
    verifyUserPath: apiUrl.BASE + apiUrl.getUserInfo + apiUrl.verifyUser,
});
