import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import vacancies from './vacancies';

const rootReducer = combineReducers({
	vacancies,
	routing: routerReducer
})

export default rootReducer;