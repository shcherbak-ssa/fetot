'use strict';

/*** imports [begin] ***/

const singInModule = require('./modules/sing-in'),
	loginModule = require('./modules/login');

/*** imports [end] ***/
/*** exports [begin] ***/

const loginMode = {
	modules: new Map(Object.entries({
		'sing-in': singInModule,
		'login': loginModule
	}))
};

/*** exports [end] ***/

module.exports = loginMode;