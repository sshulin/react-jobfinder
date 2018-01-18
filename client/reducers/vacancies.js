function vacancies(state=[], action) {
	switch(action.type) {
		case 'FETCH_VACANCIES': {
			return Object.assign({}, state, {
					loading: true
				}
			)
		}
		case 'FETCH_VACANCIES_SUCCESS': {
			return Object.assign({}, state, {
					items: action.items,
					meta: action.meta,
					loading: false
				}
			)
		}
		default:
			return state;
	}
}

export default vacancies;