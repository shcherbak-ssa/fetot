'use strict';

/*** imports [begin] ***/

const config = require('./config'),
	schema = require('./schema'),
	workers = require('./workers');

/*** imports [end] ***/
/*** exports [begin] ***/

const createAccountModule = { config, schema, workers };

/*** exports [end] ***/

module.exports = createAccountModule;