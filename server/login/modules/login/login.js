'use strict';

const validationSchema = require('./src/schema'),
	workers = require('./src/workers'),
	config = require('./src/config');

module.exports = {
	config,
	workers,
	validationSchema
};