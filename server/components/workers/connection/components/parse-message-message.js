'use strict';

/*** imports [begin] ***/

const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseMessageMessage({ip, message: {id, content}, response}) {
	console.log('parse message message init');
	
	let page = id[id.length - 1] === 'l' ? 'login' : 'app';
	if( !clientWorker.client.ipAddress[page].isCorrect(id, ip) ) return await response(null);
	
	let [parsedID, label] = await parseClientID(id);
	if( page === 'app' ) id = parsedID;
	
	let client = await clientWorker.client(page, id);
	await client.run({ connectionLabel: label, message: content, response });
}

/*** exports [end] ***/

module.exports = parseMessageMessage;