'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
import OutputMessage from '$fetot-services/output-message';
// import eventsEmitterWorker from '$fetot-events-emitter';

import {createClientStore} from './components/store/client-store';

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
	await Vue.component('app-page', () => import(`./view/app-page.vue`))();
	
	VueModel.$data.pageComponent = 'app-page';
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