import React from 'react';

class VacancyFilter extends React.Component {
	constructor(props) {
		super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
	}

  handleInputChange(event) {
  	const oldFilter = this.props.vacancies.filter;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let newFilter = {};
    newFilter[name] = value;

		this.props.fetchVacancies(Object.assign({}, oldFilter, newFilter));
  }

	render() {
		return (
			<div>
				<div className="filter">
					<div className="filter__field">
						<label className="filter__label">
							Search query
						</label>
						<input 
							type="text" 
							name="text"
							className="filter__input" 
							value={this.props.vacancies.filter.text}
							onChange={this.handleInputChange}
							/>
					</div>
				</div>
			</div>
		)
	}
}

export default VacancyFilter;