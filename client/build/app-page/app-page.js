'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
import OutputMessage from '$fetot-services/output-message';

import {clientWorker} from './components/workers/client';

/*** imports [end] ***/
/*** init [begin] ***/

/* global registration of components */
const requireComponent = require.context(
	'$fetot-view', false, /\$[\w-]+\.vue$/);

requireComponent.keys().forEach((filename) => {
	const componentConfig = requireComponent(filename);
	const componentName = filename
		.replace(/^\.\/\$/, '')
		.replace(/\.vue$/, '');
	
	Vue.component(componentName, componentConfig.default || componentConfig)
});

/* application init */
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
		connectionRequest((response) => {
			const clientStore = clientWorker.createClientStore();
			clientStore.actions.init(response.client);
			
			OutputMessage.clientID = response.id;
			success()
		});
	})
}

/*** src [end] ***/