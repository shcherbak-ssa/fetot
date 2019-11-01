'use strict';

/*** imports [begin] ***/

const loginModule = require('./modules/login');
const singInModule = require('./modules/sing-in');
const confirmEmailModule = require('./modules/confirm-email');
const createAccountModule = require('./modules/create-account');

/*** imports [end] ***/
/*** exports [begin] ***/

const loginModules = {
	'login': loginModule,
	'sing-in': singInModule,
	'confirm-email': confirmEmailModule,
	'create-account': createAccountModule
};

/*** exports [end] ***/

module.exports = loginModules;