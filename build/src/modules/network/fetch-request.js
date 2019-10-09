'use strict';

/*** imports [begin] ***/

import outputMessage from './output-message';

/*** imports [end] ***/
/*** exports [begin] ***/

async function getRequest({url, type}) {
	let response = await fetch(url, {method: 'GET'});
	
	if( response.ok ) return await response[type]();
	else console.log(new Error('fetch get request error'))
}
async function postRequest({url = '/', headers = {}, message}) {
	let response = await fetch(url, {
		method: 'POST',
		headers: Object.assign({}, headers),
		body: outputMessage.get(message)
	});
	
	if( response.ok ) return await response.json();
	else console.log(new Error('fetch post request error'))
}
async function connection({currentMode, currentModule}) {
	let response = await postRequest({
		url: 'connection',
		message: outputMessage.get({
			type: 'connection',
			content: {
				data: { currentMode, currentModule }
			}
		})
	});
	
	outputMessage.template.client = response.message.client;
}

/*** exports [end] ***/

export default {
	connection,
	get: getRequest,
	post: postRequest
}