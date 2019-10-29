'use strict';

/*** exports [begin] ***/

async function parseInputMessage(request) {
	try {
		let message = await getInputMessage(request);
		return await messageValidation(message, request.headers);
	} catch( err ) {
		console.log(err);
		return false;
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function getInputMessage(request) {
	return new Promise((success, error) => {
		let message = '';
		request
			.on('data', (data) => {
				message += data.toString();
			})
			.on('end', () => {
				success( message );
			})
			.on('error', () => {
				error()
			})
	})
}
async function messageValidation(message, headers) {
	switch( headers['content-type'] ) {
		case 'application/json':
			return JSON.parse(message);
		default:
			return Promise.reject('unknown message type');
	}
}

/*** src [end] ***/

module.exports = parseInputMessage;