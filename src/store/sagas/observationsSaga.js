import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/observationsTypes";
import * as util from "../../util";

const getAsyncObservations = function* ({ settings }) {
  try {
    settings = util.serialize(settings);
    const apiURL = settings
      ? `${util.api.observations}/settings?${settings}`
      : util.api.observations;
    const { data } = yield axios.get(apiURL);
    yield put({ type: types.OBSERVATIONS_LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.OBSERVATIONS_LIST_FAILURE, error });
  }
};

export function* getObservations() {
  yield takeLatest(types.OBSERVATIONS_LIST_REQUEST, getAsyncObservations);
}
