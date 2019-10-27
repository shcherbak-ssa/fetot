'use strict';

/*** exports [begin] ***/

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

/*** exports [end] ***/

module.exports = getInputMessage;