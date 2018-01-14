import React from 'react';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { vacancy } = this.props;

		let salary = '';
		if(vacancy.salary) {
			if(vacancy.salary.from) {
				salary += 'от ' + vacancy.salary.from + ' ';
			}
			if(vacancy.salary.to) {
				salary += 'до ' + vacancy.salary.to + ' ';
			}
			if(vacancy.salary.currency) {
				salary += vacancy.salary.currency;
			}
		}
		return (
			<div>
				<h2>
					{ vacancy.name }, { vacancy.employer.name }
				</h2>
				<div>
					Зарплата: { salary }
				</div>
				<div>
					Требования: { vacancy.snippet.requirement }
				</div>
				<div>
					Обязанности: { vacancy.snippet.responsibility }
				</div>
				<pre className="visible-xs">
					{ JSON.stringify(vacancy, null, 2) }
				</pre>
			</div>
		)
	}
}

export default Dashboard;