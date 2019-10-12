'use strict';

/*** export [begin] ***/

async function parseInputMessage(options) {
	let message = await parse(options);
	return JSON.parse(message)
}

/*** export [end] ***/

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
		let message = [];
		request
			.on('data', (data) => {
				message.push(...data.toJSON().data);
			})
			.on('end', () => {
				console.log(message.toString());
				success( message.toString() );
			})
	})
}
async function parseWebSocketMessage({message}) {
	return message;
}

module.exports = parseInputMessage;