'use strict';

/*** imports [begin] ***/

const singInModule = require('./modules/sing-in'),
	loginModule = require('./modules/login'),
	confirmEmailModule = require('./modules/confirm-email');

/*** imports [end] ***/
/*** exports [begin] ***/

const loginMode = {
	modules: new Map(Object.entries({
		'sing-in': singInModule,
		'login': loginModule,
		'confirm-email': confirmEmailModule
	}))
};

/*** exports [end] ***/

module.exports = loginMode;