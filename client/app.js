import css from './styles/style.scss';

import React from 'react';

import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import Root from './containers/Root';
import Dashboard from './components/Dashboard';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Root}>
				<IndexRoute component={Dashboard}></IndexRoute>
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
