import appConfigs from '../appConfig';

const appConfig = appConfigs.default;

export const apiUrl = {
    BASE: appConfig.BASE,
    AUTH: appConfig.AUTH,
    GOOGLE_CLIENT_ID: appConfig.GOOGLE_CLIENT_ID,
    AWS_CONFIG: appConfig.AWS_CONFIG,
    BUCKET_DIR_PARAMS: appConfig.BUCKET_DIR_PARAMS,
    authentication: 'auth',
    GPLUS_AUTH: 'social/gplus/auth',
    getUserInfo: 'user',
};
