import { all } from "redux-saga/effects";
import { getObservations } from "./observationsSaga";

export default function* rootSaga() {
  yield all([getObservations()]);
}
