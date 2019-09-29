'use strict';

const config = require('./config'),
	
	singinModule = require('./modules/sing-in'),
	loginModule = require('./modules/login'),
	userModule = require('./modules/user');

const loginMode = {
	config,
	modules: {
		'sing-in': singinModule,
		'login': loginModule,
		'user': userModule
	}
};

module.exports = loginMode;