'use strict';

/**
 * @param request
 * @returns {Promise<void>}
 */
async function fetchGETRequest({url, type}) {
	let response = await fetch(url, {
		method: 'GET'
	});
	
	if( response.ok ) return await response[type]();
	else throw new Error('Oops :)')
}

/**
 * @param request
 * @returns {Promise<void>}
 */
async function fetchPOSTRequest({url, headers, body, type}) {
	let response = await fetch(url, {
		method: 'POST',
		headers: headers || {},
		body
	});
	
	if( response.ok )
		return await response[type]();
	else
		throw new Error('Some error');
}

export default {
	get: fetchGETRequest,
	post: fetchPOSTRequest
}