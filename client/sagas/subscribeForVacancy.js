import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, all } from 'redux-saga/effects';

import { api } from '../services';
 
function* fetchVacancy(action) {
  const { response, error } = yield call(api.getVacancyDetails, {id: action.id});
  const vacancy = response;
  yield put({type: "FETCH_VACANCY_SUCCESS", vacancy});
}

export function* subscribeForVacancy() {
	yield* takeEvery(
		'FETCH_VACANCY',
		fetchVacancy
		)
}