import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, all } from 'redux-saga/effects';

import { api } from '../services';
 
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchVacancies(action) {
}
 
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
	while (true) {
  	yield take('FETCH_VACANCIES');
    const { response, error } = yield call(api.getVacanciesList, {

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
}
 
export default function* rootSaga() {
	yield fork(mySaga)
};