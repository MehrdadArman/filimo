import * as actionTypes from "../actionTypes";


const InitialState = {
    mostViewedVideosList: [],
    getMostViewedVideosLoading: true
};

const video = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOST_VIEWED_VIDEOS: {
            console.log(action.payload)
            return { ...state, getMostViewedVideosLoading: true };
        }
        case actionTypes.GET_MOST_VIEWED_VIDEOS_SUCCESS: {
            console.log(action.payload.data)
            return { ...state, mostViewedVideosList: action.payload.data, getMostViewedVideosLoading: false };
        }
        case actionTypes.GET_MOST_VIEWED_VIDEOS_FAILURE: {
            console.log(action.payload.userData)
            return { ...state, getMostViewedVideosLoading: false };
        }

        default: {
            return state;
        }
    }
};

export default video;
