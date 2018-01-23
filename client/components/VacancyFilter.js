import React from 'react';

import SearchField from './SearchField';

class VacancyFilter extends React.Component {
	constructor(props) {
		super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSuggestClicked = this.handleSuggestClicked.bind(this);
	}

  handleInputChange(value) {
  	const oldFilter = this.props.vacancies.filter;

    let newFilter = {};
    newFilter.text = value;

		this.props.fetchVacancies(Object.assign({}, oldFilter, newFilter));
    if(value.length > 1) {
			this.props.fetchSuggestsVacancies(value);
    }
  }

  handleSuggestClicked(value) {
  	this.handleInputChange(value);
  }

  createSearchField() {
  	return (
  		<SearchField 
  			bindValue={ this.props.vacancies.filter.text } 
  			valueChanged={ this.handleInputChange } 
  			suggestClicked={ this.handleSuggestClicked }
  			bindSuggests={ this.props.suggests.vacancy }
  			/>
		)
  }

	render() {
		return (
			<div>
				<div className="filter">
					<div className="filter__field">
						{this.createSearchField()}
					</div>
				</div>
			</div>
		)
	}
}

export default VacancyFilter;