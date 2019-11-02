'use strict';

/*** imports [begin] ***/

const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseMessageMessage({ip, message: {id, content}, response}) {
	console.log('parse message message init');
	
	let [parsedID, label] = await parseClientID(id);
	let page = label === 'l' ? 'login' : 'app';
	
	if( !clientWorker.client.ipAddress[page].isCorrect(id, ip) ) return await response(null);
	
	let client = await clientWorker.client(page, page === 'app' ? parsedID : id);
	let options = { connectionLabel: label, message: content, response };

	await clientWorker.client.run(client, options)
}

/*** exports [end] ***/

module.exports = parseMessageMessage;