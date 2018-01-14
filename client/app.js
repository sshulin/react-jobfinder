import css from './styles/style.scss';

import React from 'react';

import ReactDOM from 'react-dom';

// Components
import Dashboard from './components/Dashboard';

const render = Component => {
	ReactDOM.render(
		<Component />, 
		document.getElementById('app')
	);
}

render(Dashboard);
