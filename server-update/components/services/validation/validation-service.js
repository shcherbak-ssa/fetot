'use strict';

/*** imports [begin] ***/

const ValidateSchema = require('validate');

/*** imports [end] ***/
/*** exports [begin] ***/

async function validation(schema, object) {
	schema = await createSchema(schema);
	return schema.validate(object);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function createSchema(schema) {
	return new ValidateSchema(schema);
}

/*** src [end] ***/

module.exports = validation;