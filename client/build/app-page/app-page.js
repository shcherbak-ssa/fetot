'use strict';

/*** imports [begin] ***/

import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
import OutputMessage from '$fetot-services/output-message';
// import eventsEmitterWorker from '$fetot-events-emitter';

import {clientStore, createClientStore} from './components/store/client-store';

/*** imports [end] ***/
/*** init [begin] ***/

Fetot.init()
	.then((Vue) => {
		return initAppPage(Vue);
	})
	.then(() => {
		console.log('App page - success')
	})
	.catch((err) => {
		console.log(new Error(err))
	});


/*** init [end] ***/
/*** src [begin] ***/

async function initAppPage(VueModel) {
	await appConnection();
	console.log('clientStore', clientStore);
}

async function appConnection() {
	return new Promise((success) => {
		connectionRequest( async (response) => {
			const clientStore = await createClientStore();
			clientStore.actions.init(response.client);
			
			OutputMessage.clientID = response.id;
			
			success()
		});
	})
}

/*** src [end] ***/