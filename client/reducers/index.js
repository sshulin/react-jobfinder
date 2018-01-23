import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import vacancies from './vacancies';
import suggests from './suggests';

const rootReducer = combineReducers({
	vacancies,
	suggests,
	routing: routerReducer
})

export default rootReducer;