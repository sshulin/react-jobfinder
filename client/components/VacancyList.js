import React from 'react';

import VacancyItem from './VacancyItem';

class VacancyList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="vacancy-list">
					{ this.props.vacancies.items.map((vacancy, i) => 
						<VacancyItem {...this.props} key={i} i={i} vacancy={vacancy} />
					)}
				</div>
			</div>
		)
	}
}

export default VacancyList;