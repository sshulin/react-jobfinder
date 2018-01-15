import React from 'react';

import VacancyItem from './VacancyItem';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>
					{'Datsu' + '-' + 'sara'}
				</h1>
				<div className="vacancies-list">
					{ this.props.vacancies.map((vacancy, i) => 
						<VacancyItem {...this.props} key={i} i={i} vacancy={vacancy} />
					)}
				</div>
			</div>
		)
	}
}

export default Dashboard;