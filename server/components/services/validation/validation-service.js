'use strict';

/*** imports [begin] ***/

const createSchema = require('./components/create-schema');

/*** imports [end] ***/
/*** exports [begin] ***/

async function validationService(schema, object) {
	try {
		schema = await createSchema(schema);
		await schema.validate(object);
		
		return true;
	} catch( err ) {
		if( typeof err === 'string' ) {
			console.log(new Error(err));
			return false;
		}
		return err;
	}
}

/*** exports [end] ***/

module.exports = validationService;