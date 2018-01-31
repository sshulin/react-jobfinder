import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware, { END } from 'redux-saga'

import rootSaga, { mySaga } from './sagas/index';

import rootReducer from './reducers/index';

import vacancies from './data/vacancies';

const defaultState = {
	vacancies: {
		items: vacancies,
		loading: true,
		filter: {
			text: ''
		}
	},
	vacancy: {
		current: {
			loading: true
		}
	},
	suggests: {
		vacancy: [],
	}
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	defaultState,
  applyMiddleware(
    sagaMiddleware
  ),
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;
