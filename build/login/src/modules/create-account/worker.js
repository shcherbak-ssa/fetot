'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** init [begin] ***/

const outputMessage = {
	content: {
		type: 'create-account',
		data: {}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function createAccountModuleWorker() {}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse({type, message}) {
	switch( type ) {
		case 'error':
			console.log(message);
			break;
		case 'success':
			alert('Login success')
	}
}

/*** src [end] ***/

export default createAccountModuleWorker;