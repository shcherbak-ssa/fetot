'use strict';

const config = require('./src/config'),
	workers = require('./src/workers'),
	validationSchema = require('./src/schema');

module.exports = {
	config,
	workers,
	validationSchema
};