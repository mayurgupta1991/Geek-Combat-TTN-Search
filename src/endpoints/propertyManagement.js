import { apiUrl } from '../constants/apiConstant';

export default({
    propertyListPath: apiUrl.BASE + apiUrl.fetchProperty,
    languageNamePath: apiUrl.BASE + apiUrl.languageName,
    languageCategoryPath: apiUrl.BASE + apiUrl.languageCategory,
    uploadPropertyInfoPath: apiUrl.BASE + apiUrl.uploadPropertyData,
    propertyChangeStatusPath: apiUrl.BASE + apiUrl.uploadPropertyData + apiUrl.changestatus,
    fetchDeviceListPath: apiUrl.BASE + apiUrl.fetchDevice,
    deviceListPath: apiUrl.BASE + apiUrl.deviceList,
    devicePairPath: apiUrl.BASE + apiUrl.devicePair,
    deviceUnpairPath: apiUrl.BASE + apiUrl.deviceUnpair,
    deviceChangeStatusPath: apiUrl.BASE + apiUrl.fetchDevice + apiUrl.changestatus,
    propertySearch: apiUrl.BASE + apiUrl.propertySearch,
    generatePublicVideoUrl: apiUrl.BASE + apiUrl.generatePublicVideoUrl,
});
