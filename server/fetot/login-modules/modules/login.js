'use strict';

/*** imports [begin] ***/
/*** imports [end] ***/
/*** init [begin] ***/

const config = {
	response: {
		'many-enter-count': {
			message: {
				type: 'error',
				message: {
					error: 'Your are finishing the access count of enter'
				}
			}
		},
		'not-exist': {
			message: {
				type: 'error',
				message: {
					error: 'Invalid email or password'
				}
			}
		},
		'success': {
			message: {
				type: 'success'
			}
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const schema = { email: 'email', password: 'password' };

async function loginModuleWorker({store, mongodb, message, response}) {
	let enterCount = store.get('enter-count');
	if( enterCount === undefined ) enterCount = 0;
	
	if( enterCount === 7 ) return await response(config.response['many-enter-count']);
	store.set('enter-count', enterCount + 1);
	
	let document = await mongodb.findOneDocument(message);
	if( !document ) return await response(config.response['not-exist']);
	
	await response(config.response.success);
}

/*** exports [end] ***/

module.exports = { schema, worker: loginModuleWorker };