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

	renderVacanciesList() {
		if(this.props.vacancies.loading) {
			return (
				<div className="vacancies-list">
					<div className="vacancy-item">
						<div className="vacancy-item__name">
							Loading
						</div>
					</div>
				</div>
			)
		} else if(this.props.vacancies.items.length === 0) {
			return (
				<div className="vacancies-list">
					<div className="vacancy-item">
						<div className="vacancy-item__name">
							No data
						</div>
					</div>
				</div>
			)
		} else {
			return (<VacancyList {...this.props} />)
		}
	}

	render() {
		const vacanciesLoading = this.props.vacancies.loading;
		return (
			<div>
				<VacancyFilter {...this.props} />
				{ this.renderVacanciesList() }
			</div>
		)
	}
}

export default Dashboard;