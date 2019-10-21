'use strict';

/*** imports [begin] ***/

import outputMessage from './output-message';

/*** imports [end] ***/
/*** init [begin] ***/

window.addEventListener('unload', () => {
	fetch('/', {
		method: 'POST',
		body: outputMessage.getMessage({type: 'exit'}),
		keepalive: true
	})
});

/*** init [end] ***/
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

async function connection({currentMode, data = {}}) {
	let {message} = await postRequest({
		url: 'connection',
		message: {
			type: 'connection',
			content: {
				type: currentMode,
				data: data
			}
		}
	});
	
	outputMessage.template.client = message.client;
	return message.config
}
async function changeModule(moduleName, data = {}) {
	return await postRequest({
		message: {
			type: 'change-module',
			content: {
				type: moduleName,
				data: data
			}
		}
	})
}

/*** exports [end] ***/

export default {
	get: getRequest,
	post: postRequest,
	connection,
	changeModule
}