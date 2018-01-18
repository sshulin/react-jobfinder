// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}


// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}

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