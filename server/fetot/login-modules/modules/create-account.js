'use strict';

/*** modules [begin] ***/

const clientService = require('../../../components/services/client');

/*** modules [end] ***/
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

async function createAccountWorker({message: {fullname, password}, store, response}) {
	const email = store.get('current-client-email');
	await clientService.create({email, password, fullname});
	
	await response(config.response.success);
}

/*** exports [end] ***/

module.exports = { schema, worker: createAccountWorker };