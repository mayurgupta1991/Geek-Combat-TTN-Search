import { fetchWebApi } from '../../webapis/dashboard';
import endpoints from '../../endpoints/publicVideos';
import { handleFetchError } from '../../util/errorHandler';
import { createPublicVideoList } from '../videoList';
import { staticData } from '../../constants';

export default function fetchVideos({ currentPage, videosToDisplay, propertyId }) {
    const url = `${endpoints.videoListPath}/${propertyId}?page=${currentPage}&&size=${videosToDisplay}`;
    return dispatch => fetchWebApi('', url).request
        .then(response => {
            dispatch(createPublicVideoList(response.data, staticData));
            return response;
        })
        .catch(error => {
            handleFetchError(error, dispatch);
            return { error };
        });
}
