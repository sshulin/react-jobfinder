import queryString from 'query-string';

const API_ROOT = 'https://api.hh.ru/';

function callApi(url, params) {
	const fullUrl = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : root;
	return fetch(fullUrl + '?' + queryString.stringify(params))
		.then(function(response) {
			return response.json().then(function(json) {
				return {
					response: response,
					json: json
				}
			})
		})
		.then(({json, response}) => {
			if(!response.ok) {
				return Promise.reject(json)
			}

			return json
		})
		.then(
			response => ({response}),
			error => ({error: error.message || 'Unhandled error'})
		)
}

export const getVacanciesList = params => callApi('vacancies/', params);