import React from 'react';

class VacancyDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchVacancy(this.props.params.vacancyId);
	}

	renderSubtitle(vacancy) {
		let employer = '';
		if(vacancy.employer && vacancy.employer.name) {
			employer = vacancy.employer.name;
			employer += ', ';
		}
		let area = '';
		if(vacancy.area && vacancy.area.name) {
			area = vacancy.area.name;
		}

		return (
			<div className="vacancy-details__employer">
				{ employer }
				<i className="fa fa-map-marker"></i> { area }
			</div>
		)
	}

	renderSalary(salary) {
		let returnSalary = '';
		if(salary) {
			if(salary.from) {
				returnSalary += 'от ' + salary.from + ' ';
			}
			if(salary.to) {
				returnSalary += 'до ' + salary.to + ' ';
			}
		} else {
			returnSalary += 'Не указано'
		}
		return returnSalary;
	}

	renderSalaryCurrency(salary) {
		if(salary && salary.currency) {
			return (
				<span className="salary__currency"> { salary.currency } </span>
			)
		} else {
			return '';
		}
	}

	renderVacancy(vacancy) {
		if(this.props.vacancy.loading) {
			return (
				<div className="vacancy-details">
					<div className="vacancy-details__header">
						<div className="vacancy-details__name">
							Загрузка
						</div>
						<div className="vacancy-details__employer">
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="vacancy-details">
					<div className="vacancy-details__header">
						<div className="vacancy-details__name">
							{ vacancy.name }
						</div>
						{ this.renderSubtitle(vacancy) }
					</div>
					<div className="vacancy-details__salary">
						<div className="salary">
							<div className="salary__label">
								Зарплата:
							</div>
							<div className="salary__value">
							 	{ this.renderSalary(vacancy.salary) } { this.renderSalaryCurrency(vacancy.salary) }
							</div>
						</div>
					</div>
					<div className="vacancy-details__description" dangerouslySetInnerHTML={{__html: vacancy.description}}></div>
				</div>
			)
		}
	}

	render() {
		const { vacancyId } = this.props.params;

		const vacancy = this.props.vacancy.current;

		return (
			this.renderVacancy(vacancy) 
		)
	}
}

export default VacancyDetails;