import { call, takeEvery, all, fork, put } from "redux-saga/effects";
import { toast } from "react-toastify";



//**  action types
import * as actionTypes from "../actionTypes";

//** actions
import * as actions from '../video/actions'

//** services 
import { getMostViewedVideosAsync } from '../../services/videoServices'




// ** GET  car types 
function* getMostViewedVideos() {
    try {
        const response = yield call(
            getMostViewedVideosAsync
        );
        const data = response.data;
  
        if (response.status === 200) {
            yield put(actions.getMostViewdVideosSuccess(data));
        } else {
            toast('Some thing went wrong');
            yield put(actions.getMostViewdVideosFailure());
        }
    } catch (error) {
        toast('Some thing went wrong');
        console.log(error);
    }
}


// ******************watch*****************

// watch get car types
export function* watchGetMostViewedVideos() {
    yield takeEvery(actionTypes.GET_MOST_VIEWED_VIDEOS, getMostViewedVideos);
}


// ** Fork
export default function* rootSaga() {
    yield all([
        fork(watchGetMostViewedVideos),
    ]);
}
