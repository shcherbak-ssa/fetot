'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import locStorage from 'fetot-js-modules/local-storage';
import fetchRequest from 'fetot-network-modules/fetch-request';
import fetotApp from './src/components/app.vue';

/*** imports [end] ***/
/*** init [begin] ***/

const client = locStorage.getStorageItem('client');
Promise.resolve({currentMode: 'app', data: client})
       .then(fetchRequest.connection)
       .then((settings) => {
       	  console.log('settings', settings);
       	  return {};
       })
       // .then(initApplication)
       .then(createVueModel)
       .catch((err) => {
	       console.log(new Error(err))
       });

/*** init [end] ***/
/*** src [begin] ***/

async function createVueModel(/*options*/) {
	return new Vue({
		el: '#app',
		// data() { return { options } },
		template: '<fetot-app/>',
		components: { 'fetot-app': fetotApp }
	});
}

/*** src [end] ***/