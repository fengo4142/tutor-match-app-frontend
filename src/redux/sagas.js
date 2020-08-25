import { all } from 'redux-saga/effects';

import tutorSagas from './tutor/saga';

export default function* rootSaga() {
  yield all([
    tutorSagas()
  ]);
}
