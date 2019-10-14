'use strict';

/*** imports [begin] ***/

const loginMode = require('./login');

/*** imports [end] ***/
/*** exports [begin] ***/

const fetotModes = new Map(Object.entries({
	'login': loginMode
}));

/*** exports [end] ***/

module.exports = fetotModes;