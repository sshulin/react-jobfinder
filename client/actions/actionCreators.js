export function fetchVacancies(filter) {
	return {
		type: 'FETCH_VACANCIES',
		filter
	}
}

export function fetchVacanciesSuccess(items, meta) {
	return {
		type: 'FETCH_VACANCIES_SUCCESS',
		items,
		meta
	}
}

export function fetchSuggestsVacancies(text) {
	return {
		type: 'FETCH_SUGGESTS_VACANCIES',
		text
	}
}

export function fetchSuggestVacanciesSuccess(items) {
	return {
		type: 'FETCH_SUGGESTS_VACANCIES_SUCCESS',
		items
	}
}