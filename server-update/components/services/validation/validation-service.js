'use strict';

/*** imports [begin] ***/

const ValidateSchema = require('validate');

/*** imports [end] ***/
/*** exports [begin] ***/

async function validation(schema, object) {
	schema = new ValidateSchema(schema);
	return schema.validate(object);
}

/*** exports [end] ***/

module.exports = validation;