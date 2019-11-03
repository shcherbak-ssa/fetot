'use strict';

/*** imports [begin] ***/

const sendMailLetter = require('../../../components/services/email');
const generateID = require('../../../lib/generate-id');

/*** imports [end] ***/
/*** init [begin] ***/

const config = {
	response: {
		'client-exist': {
			message: {
				type: 'error',
				message: {
					error: 'Client with current email already exist'
				}
			}
		},
		'success': {
			message: {
				type: 'success'
			}
		}
	},
	emailLetterConfig(email, code) {
		return {
			clientEmail: email,
			subject: 'Confirm email',
			type: 'confirm-email',
			data: { code }
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const schema = { email: 'email' };

async function singInModuleWorker({message: {email}, mongodb, store, response}) {
	let emailExist = await mongodb.findOneDocument({email: email});
	if( emailExist ) return await response(config.response['client-exist']);
	
	let confirmEmailCode = await generateID('1234567890', 6);
	store.set('confirm-email-code', confirmEmailCode)
	     .set('current-client-email', email);
	
	await response(config.response.success);
	await sendMailLetter(config.emailLetterConfig(email, confirmEmailCode));
}

/*** exports [end] ***/

module.exports = { schema, worker: singInModuleWorker };