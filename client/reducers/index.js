import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import vacancies from './vacancies';
import vacancy from './vacancy';
import suggests from './suggests';

const rootReducer = combineReducers({
	vacancies,
	vacancy,
	suggests,
	routing: routerReducer
})

export default rootReducer;