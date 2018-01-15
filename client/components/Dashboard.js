import React from 'react';

import VacancyItem from './VacancyItem';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
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