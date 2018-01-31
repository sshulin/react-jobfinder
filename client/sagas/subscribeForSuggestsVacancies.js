import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, all } from 'redux-saga/effects';

import { api } from '../services';
 
function* fetchSuggestsVacancies(action) {
  const { response, error } = yield call(api.getSuggestsVacancies, {
  	text: action.text
  });
  const items = response.items;
  yield put({type: "FETCH_SUGGESTS_VACANCIES_SUCCESS", items});

}

export function* subscribeForSuggestsVacancies() {
	yield* takeEvery(
		'FETCH_SUGGESTS_VACANCIES',
		fetchSuggestsVacancies
		)
}