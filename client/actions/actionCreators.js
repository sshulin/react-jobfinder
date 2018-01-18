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