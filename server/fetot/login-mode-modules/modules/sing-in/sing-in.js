'use strict';

/*** imports [begin] ***/

const config = require('./config'),
	schema = require('./schema'),
	workers = require('./workers');

/*** imports [end] ***/
/*** exports [begin] ***/

const singInModule = { config, schema, workers };

/*** exports [end] ***/

module.exports = singInModule;