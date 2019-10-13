'use strict';

const singinModule = require('./modules/sing-in'),
	loginModule = require('./modules/login'),
	userModule = require('./modules/user');

const loginMode = {
	modules: {
		'sing-in': singinModule,
		'login': loginModule
	}
};

module.exports = loginMode;