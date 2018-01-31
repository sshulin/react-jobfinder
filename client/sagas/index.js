import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, all } from 'redux-saga/effects';

import { api } from '../services';

import { subscribeForVacancies } from './subscribeForVacancies';
import { subscribeForVacancy } from './subscribeForVacancy';
import { subscribeForSuggestsVacancies } from './subscribeForSuggestsVacancies';

 
export default function* rootSaga() {
	yield [
		fork(subscribeForVacancies),
		fork(subscribeForVacancy),
		fork(subscribeForSuggestsVacancies)
	]
};