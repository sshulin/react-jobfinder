import 'regenerator-runtime/runtime';

import css from './styles/style.scss';

import React from 'react';

import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import Root from './containers/Root';
import Dashboard from './components/Dashboard';
import VacancyDetails from './components/VacancyDetails';

window.constpath = window.location.pathname;

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path={constpath} component={Root}>
				<IndexRoute component={Dashboard}></IndexRoute>
				<Route path={constpath + 'vacancy/:vacancyId'} component={VacancyDetails}></Route>
			</Route>
		</Router>
	</Provider>
)

const render = Component => {
	ReactDOM.render(
		router, 
		document.getElementById('app')
	);
}

render(Dashboard);
