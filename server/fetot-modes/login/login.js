'use strict';

/*** imports [begin] ***/

const object2mapWorker = require('../../lib/object2map-worker'),
	
	singInModule = require('./modules/sing-in'),
	loginModule = require('./modules/login'),
	confirmEmailModule = require('./modules/confirm-email'),
	createAccountModule = require('./modules/create-account');

/*** imports [end] ***/
/*** exports [begin] ***/

const loginMode = {
	modules: object2mapWorker({
		'sing-in': singInModule,
		'login': loginModule,
		'confirm-email': confirmEmailModule,
		'create-account': createAccountModule
	})
};

/*** exports [end] ***/

module.exports = loginMode;