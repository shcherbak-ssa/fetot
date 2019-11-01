'use strict';

/*** imports [begin] ***/

const Schema = require('./Schema');
const commonSchemas = require('../src/common-schemas');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function createSchema(schema) {

}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseSchema(schema) {
	return Promise.all(Object.entries(schema).map(([key, value]) => {
		if( '__props' in value ) value = parseSchema(value.__props);
	}))
}
async function parseValue(value) {

}
async function getErrors(object) {
	return object.error || null;
}

/*** src [end] ***/

module.exports = {};