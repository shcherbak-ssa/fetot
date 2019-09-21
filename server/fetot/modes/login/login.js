'use strict';

const config = require('./config'),
	singinModule = require('./modules/sing-in');

const loginMode = {
	config,
	modules: {
		'sing-in': singinModule
	}
};

module.exports = loginMode;