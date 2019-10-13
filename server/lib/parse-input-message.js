'use strict';

/*** export [begin] ***/

async function parseInputMessage(options) {
	let message = await parse(options);
	return JSON.parse(message)
}

/*** export [end] ***/
/*** src [begin] ***/

async function parse(options) {
	switch( options.type ) {
		case 'post-message':
			return await parsePostMessage(options);
		case 'ws-message':
			return await parseWebSocketMessage(options);
	}
}
async function parsePostMessage({request}) {
	return new Promise((success, error) => {
		let message = '';
		request
			.on('data', (data) => {
				message += data.toString();
			})
			.on('end', () => {
				success( message );
			})
	})
}
async function parseWebSocketMessage({message}) {
	return message;
}

/*** src [end] ***/

module.exports = parseInputMessage;