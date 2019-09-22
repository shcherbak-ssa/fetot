'use strict';

const config = require('./config'),
	
	singinModule = require('./modules/sing-in'),
	userModule = require('./modules/user');

const loginMode = {
	config,
	modules: {
		'sing-in': singinModule,
		'user': userModule
	}
};

module.exports = loginMode;