'use strict';

/*
* Validation schema:
*
*   key: can be object or string (if key is string => it is common schema)
*
*   object properties:
*     type => type of the data value [String, Number, Boolean, ...]
*     required => saying that the value must be not empty of null [true/false]
*     valid => list of the values which current key must have [typeof === 'array']
*     validate => custom function for value validation [typeof === 'function']
*     error => the object which will be return if the validation is fail [typeof === 'object']
*
* */

/*** imports [begin] ***/

const createSchema = require('./components/create-schema');

/*** imports [end] ***/
/*** exports [begin] ***/

function validationService(schema) {
	let currentSchema = createSchema(Object.assign({}, schema));
	
	return async (message) => {
		return await validate(currentSchema, message);
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function validate(schema, object) {
	try {
		
		await schema.validate(object);
		return true;
	
	} catch( err ) {
	
		if( typeof err === 'string' ) {
			console.log(new Error(err));
			return null;
		}
		
		if( err === null ) return null;
		
		if( 'message' in err ) return err;
	}
}

/*** src [end] ***/

module.exports = validationService;