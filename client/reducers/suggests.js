function suggests(state=[], action) {
	switch(action.type) {
		case 'FETCH_SUGGESTS_VACANCIES': {
			return Object.assign({}, state, {
					loading: true
				}
			)
		}
		case 'FETCH_SUGGESTS_VACANCIES_SUCCESS': {
			return Object.assign({}, state, {
					vacancy: action.items
				}
			)
		}
		default:
			return state;
	}
}

export default suggests;