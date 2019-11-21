'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
import OutputMessage from '$fetot-services/output-message';
import StoreWorker from '$fetot-store-worker';

import {createPageStore} from './components/store/page-store';
import {createClientStore} from './components/store/client-store';
import {createCurrentModuleStore} from './components/store/current-module-store';
import {createCurrentBlocksStore} from './components/store/current-blocks-store';
import {createCurrentCategoriesStore} from './components/store/current-categories-store';

/*** imports [end] ***/
/*** init [begin] ***/

/* init store */
Fetot.initStore();

createPageStore();
createClientStore();
createCurrentModuleStore();
createCurrentBlocksStore();
createCurrentCategoriesStore();

/* global registration of components */
const requireComponent = require.context('../../app/view', true, /\$[\w-]+\.vue$/);

requireComponent.keys().forEach((filename) => {
	const componentConfig = requireComponent(filename);
	const componentName = filename.replace(/^\.\/[-\w]+\/\$/, '').replace(/\.vue$/, '');
	
	Vue.component(componentName, componentConfig.default || componentConfig)
});

/* application init */
Fetot.init()
	.then((VueModel) => {
		return initAppPage(VueModel);
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
	const response = await connectionRequest();
	const clientStore = StoreWorker.getStore('client');
	
	await clientStore.actions.init(response.client);
	OutputMessage.clientID = response.id;
	
	await Vue.component('app-page', () => import(`./view/app-page.vue`))();
	VueModel.$data.pageComponent = 'app-page';
}

/*** src [end] ***/