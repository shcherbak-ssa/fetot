'use strict';

/*** imports [begin] ***/

const object2mapWorker = require('../lib/object2map-worker'),
	
	loginMode = require('./login'),
	appMode = require('./app');

/*** imports [end] ***/
/*** exports [begin] ***/

const fetotModes = object2mapWorker({
	'login': loginMode,
	'app': appMode
});

/*** exports [end] ***/

module.exports = fetotModes;