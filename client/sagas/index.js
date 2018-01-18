import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, all } from 'redux-saga/effects';

import { api } from '../services';
 
function* fetchVacancies(action) {
  const { response, error } = yield call(api.getVacanciesList, {
  	...action.filter
  });
  const items = response.items;
  const meta = {
  	found: response.found,
  	page: response.page,
  	pages: response.pages,
  	per_page: response.per_page
  }
  yield put({type: "FETCH_VACANCIES_SUCCESS", items, meta});
}

function* subscribeForVacancies() {
	yield* takeEvery(
		'FETCH_VACANCIES',
		fetchVacancies
		)
}
 
export default function* rootSaga() {
	yield fork(subscribeForVacancies)
};