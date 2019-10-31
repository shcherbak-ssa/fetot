'use strict';

/*** imports [begin] ***/

import outputMessage from '../output-message';

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendRequest(options) {
	return await postRequest(options);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function postRequest({url = '/', message, headers, options = {}}) {
	return await fetch(url, {
		method: 'POST',
		body: outputMessage.getMessage(message),
		headers: outputMessage.getHeaders(headers),
		...options
	})
}

/*** src [end] ***/

export default sendRequest;