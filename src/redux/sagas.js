import { all, fork } from "redux-saga/effects";
import videoSagas from "./video/saga";


export default function* rootSaga() {
  yield all([
    fork(videoSagas),
  ]);
}
