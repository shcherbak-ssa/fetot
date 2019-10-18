'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetchRequest from 'fetot-network-modules/fetch-request';
import initApplication from './src/app-init';
import fetotLogin from './src/components/login.vue';

/*** imports [end] ***/
/*** init [begin] ***/

Promise.resolve({currentMode: 'login'})
       .then(fetchRequest.connection)
       .then(initApplication)
       .then(createVueModel)
       .catch((err) => {
	       console.log(new Error(err))
       });

/*** init [end] ***/
/*** src [begin] ***/

async function createVueModel(options) {
	return new Vue({
		el: '#login',
		data() { return { options } },
		template: '<fetot-login :options="options"/>',
		components: { 'fetot-login': fetotLogin }
	});
}

/*** src [end] ***/