'use strict';

/*** imports [begin] ***/

const createSchema = require('./components/create-schema');

/*** imports [end] ***/
/*** exports [begin] ***/

function validationService(schema) {
	schema = createSchema(schema);
	
	return async (message) => {
		return await validate(schema, message);
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
		
		console.log(err);
		
		if( 'message' in err ) return err;
	}
}

/*** src [end] ***/

module.exports = validationService;