function vacancy(state=[], action) {
	switch(action.type) {
		case 'FETCH_VACANCY': {
			return Object.assign({}, state, {
					loading: true
				}
			)
		}
		case 'FETCH_VACANCY_SUCCESS': {
			return Object.assign({}, state, {
					current: action.vacancy,
					loading: false
				}
			)
		}
		default:
			return state;
	}
}

export default vacancy;