import React from 'react';
import { Link } from 'react-router';

class VacancyItem extends React.Component {
	constructor(props) {
		super(props);
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

	render() {
		const { vacancy } = this.props;

		return (
			<div className="vacancy-item">
				<div className="vacancy-item__wrapper">
					<div className="vacancy-item__header">
						<div className="vacancy-item__name">
							<Link to={`/vacancy/${vacancy.id}`}>
								{ vacancy.name }
							</Link>
						</div>
						<div className="vacancy-item__employer">
							{ vacancy.employer.name }, <i className="fa fa-map-marker"></i> { vacancy.area.name }
						</div>
					</div>
					<div className="vacancy-item__salary">
						<div className="salary">
							<div className="salary__label">
								Зарплата:
							</div>
							<div className="salary__value">
							 	{ this.renderSalary(vacancy.salary) } { this.renderSalaryCurrency(vacancy.salary) }
							</div>
						</div>
					</div>
					<div className="vacancy-item__prop">
						<div className="vacancy-item__icon">
							<i className="fa fa-graduation-cap"></i>
						</div>
						<div className="vacancy-item__prop-label">
							Требования: 
						</div>
						<div className="vacanci-item__val">
							{ vacancy.snippet.requirement }
						</div>
					</div>
					<div className="vacancy-item__prop">
						<div className="vacancy-item__icon">
							<i className="fa fa-suitcase"></i>
						</div>
						<div className="vacancy-item__prop-label">
							Обязанности: 
						</div>
						<div className="vacanci-item__val">
							{ vacancy.snippet.responsibility }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VacancyItem;