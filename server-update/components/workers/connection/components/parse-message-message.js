'use strict';

/*** imports [begin] ***/

const parseClientID = require('../src/parse-client-id');
const clientWorker = require('../../client');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseMessageMessage({ip, message: {id, content}, response}) {
	if( !clientWorker.client.isCorrectIP(id, ip) ) return await response(null);
	
	let [parsedID, label] = await parseClientID(id);
	let client = await clientWorker.client((label === 'l') ? 'login' : 'app', parsedID);
	
	await client.run({message: content, response});
}

/*** exports [end] ***/

module.exports = parseMessageMessage;