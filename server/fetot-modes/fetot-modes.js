'use strict';

/*** imports [begin] ***/

const object2mapWorker = require('../lib/object2map-worker'),
	
	loginMode = require('./login'),
	personalMode = require('./personal');

/*** imports [end] ***/
/*** exports [begin] ***/

const fetotModes = object2mapWorker({
	'login': loginMode,
	'personal': personalMode
});

/*** exports [end] ***/

module.exports = fetotModes;