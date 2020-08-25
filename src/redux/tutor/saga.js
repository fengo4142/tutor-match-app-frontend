import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import toastActions from 'redux/toast/action';
import { getHeaders, getEndpoint } from 'utils/api';

import actions from './actions';

function* fetchRequestHandler({ payload }) {
  const params = {
    url: getEndpoint('/tutor'),
    method: 'GET',
    headers: getHeaders(),
    data: payload,
  };

  try {
    // @ts-ignore
    const { data } = yield call(axios.request, params);

    yield put(actions.fetchSuccess(data));
  } catch (err) {
    yield put(actions.fetchFailed(err));
    yield put(
      toastActions.addToast({
        message: err.response.data.message,
        type: 'error',
      }),
    );
  }
}

function* createRequestHandler({ payload }) {
  const params = {
    url: getEndpoint('/tutor'),
    method: 'POST',
    headers: getHeaders(),
    data: payload,
  };

  try {
    // @ts-ignore
    const { data } = yield call(axios.request, params);

    yield put(actions.createSuccess(data));
  } catch (err) {
    yield put(actions.createFailed(err));
    yield put(
      toastActions.addToast({
        message: err.response.data.message,
        type: 'error',
      }),
    );
  }
}

function* updateRequestHandler({ payload }) {
  const { id } = payload
  const params = {
    url: getEndpoint(`/tutor/${id}`),
    method: 'PATCH',
    headers: getHeaders(),
    data: payload
  };

  try {
    // @ts-ignore
    const { data } = yield call(axios.request, params);

    yield put(actions.updateSuccess(data));
  } catch (err) {
    yield put(actions.updateFailed(err));
  }
}

// @ts-ignore
function* deleteRequestHandler({ payload }) {
  const { id } = payload
  const params = {
    url: getEndpoint(`/tutor/${id}`),
    method: 'DELETE',
    headers: getHeaders(),
  }

  try {
    // @ts-ignore
    const { data } = yield call(axios.request, params)

    yield put(actions.deleteSuccess(data))
  } catch (err) {
    yield put(actions.deleteFailed(err))
  }
}

export default function* tutorSagas() {
  // @ts-ignore
  yield takeLatest(actions.FETCH_REQUEST, fetchRequestHandler);
  yield takeLatest(actions.CREATE_REQUEST, createRequestHandler);
  yield takeLatest(actions.UPDATE_REQUEST, updateRequestHandler);
  yield takeLatest(actions.DELETE_REQUEST, deleteRequestHandler);
}
