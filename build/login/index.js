'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetchRequest from 'fetot-network-modules/fetch-request';

import initApplication from './src/app-init';
import fetotLogin from './login.vue';

/*** imports [end] ***/
/*** init [begin] ***/

initApplication()
	.then(createVueModel)
	.then(fetchRequest.connection);

/*** init [end] ***/
/*** src [begin] ***/

async function createVueModel(options) {
	new Vue({
		el: '#login',
		data: { options },
		template: '<fetot-login :options="options"/>',
		components: { 'fetot-login': fetotLogin }
	});
	return {
		currentMode: 'login',
		currentModule: options.store.get('current-module')
	}
}

/*** src [end] ***/