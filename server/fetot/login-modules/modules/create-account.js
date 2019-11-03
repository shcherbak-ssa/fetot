'use strict';

/*** init [begin] ***/

const config = {
	response: {
		'success': {
			message: {
				type: 'success'
			}
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const schema = {
	password: 'password',
	fullname: {
		type: String,
		required: true,
		validate(value) {
			return /[\da-z ]/i.test(value)
		},
		error: {
			input: 'fullname',
			error: 'Invalid full name'
		}
	}
};

async function createAccountWorker({message: {fullname, password}, mongodb, store, response}) {
	/*
	* need to add default modules
	* */
	
	let email = store.get('current-client-email');
	let document = await mongodb.insertOneDocument({email, password, config: {fullname}});
	
	console.log('new client', document);
	await response(config.response.success);
}

/*** exports [end] ***/

module.exports = { schema, worker: createAccountWorker };