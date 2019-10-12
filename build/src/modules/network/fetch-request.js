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
		headers: outputMessage.getHeaders(headers),
		body: outputMessage.getMessage(message)
	});
	
	if( response.ok ) return await response.json();
	else console.log(new Error('fetch post request error'))
}
async function connection({currentMode, currentModule}) {
	let response = await postRequest({
		url: 'connection',
		message: {
			type: 'connection',
			content: {
				type: '',
				data: { currentMode, currentModule }
			}
		}
	});
	
	console.log(response);
	outputMessage.template.client = response.message.client;
}

/*** exports [end] ***/

export default {
	connection,
	get: getRequest,
	post: postRequest
}