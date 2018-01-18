import React from 'react';

import VacancyList from './VacancyList';
import VacancyFilter from './VacancyFilter';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchVacancies();
	}

	render() {
		const vacanciesLoading = this.props.vacancies.loading;
		return (
			<div>
				<VacancyFilter {...this.props} />
				{ vacanciesLoading ? (
					<div className="vacancies-list">
						<div className="vacancy-item">
							<div className="vacancy-item__name">
								Loading
							</div>
						</div>
					</div>
				) : (
					<VacancyList {...this.props} />
				) }
			</div>
		)
	}
}

export default Dashboard;