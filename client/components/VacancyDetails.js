import React from 'react';

class VacancyDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { vacancyId } = this.props.params;

		const vacancy = this.props.vacancies.find(function(item) {
			return item.id == vacancyId
		})

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
		} else {
			salary += 'Не указано'
		}
		return (
			<div className="vacancy-item">
				<div className="vacancy-item__header">
					<div className="vacancy-item__name">
						{ vacancy.name }
					</div>
					<div className="vacancy-item__employer">
						{ vacancy.employer.name }
					</div>
				</div>
				<div className={"vacancy-item__salary"}>
					<div className="vacancy-item__icon">
						<i className="fa fa-ruble"></i>
					</div>
					<div className="vacancy-item__prop-label">
						Зарплата:
					</div>
					<div className="vacanci-item__val">
					 	{ salary }
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
				<pre className="visible-xs">
					{ JSON.stringify(vacancy, null, 2) }
				</pre>
			</div>
		)
	}
}

export default VacancyDetails;