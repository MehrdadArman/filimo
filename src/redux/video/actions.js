import * as actionTypes from "../actionTypes";

export const getMostViewdVideos = () => ({
    type: actionTypes.GET_MOST_VIEWED_VIDEOS,
});

export const getMostViewdVideosSuccess = (data) => ({
    type: actionTypes.GET_MOST_VIEWED_VIDEOS_SUCCESS,
    payload: {
        data,
    },
});

export const getMostViewdVideosFailure = () => ({
    type: actionTypes.GET_MOST_VIEWED_VIDEOS_FAILURE,
});
