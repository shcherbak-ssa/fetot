'use strict';

/*** imports [begin] ***/

const Schema = require('./Schema');
const commonSchemas = require('../src/common-schemas');
const getTrueValueTypeof = require('../src/get-true-value-typeof');

/*** imports [end] ***/
/*** exports [begin] ***/

function createSchema(schema) {
	let parsedSchema = parseSchema(schema);
	parsedSchema = Object.fromEntries(parsedSchema);
	
	return new Schema(parsedSchema);
}

/*** exports [end] ***/
/*** src [begin] ***/

function parseSchema(schema) {
	return Object.entries(schema).map(parseSchemaItem);
}
function parseSchemaItem([key, value]) {
	if( getTrueValueTypeof(value) === 'String' ) // if value is string => it is common-schema label
		value = Object.assign({}, commonSchemas[value]);
	
	if( '__props' in value ) // __props property mean that the value should be an object
		value = createSchema(value.__props);
	
	return [key, value]
}

/*** src [end] ***/

module.exports = createSchema;