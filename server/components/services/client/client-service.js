'use strict';

/*** imports [begin] ***/

const createClient = require('./create-client');
const getClient = require('./get-client');

/*** imports [end] ***/
/*** exports [begin] ***/

const clientService = {
	get: getClient,
	create: createClient,
	remove: ''
};


/*** exports [end] ***/

module.exports = clientService;