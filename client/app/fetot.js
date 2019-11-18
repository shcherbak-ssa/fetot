'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

import fetotContainer from './view/fetot-container.vue';

import StoreWorker from './components/workers/store-worker';
import OutputMessage from './components/services/output-message';

/*** imports [end] ***/
/*** init [begin] ***/

import './scss/main.scss';

window.addEventListener("unload", function() {
	const message = new OutputMessage({messageType: 'close'}).getMessage();
	navigator.sendBeacon('/', JSON.stringify(message));
}, false);

/*** init [end] ***/
/*** exports [begin] ***/

function initStore() {
	Vue.use(Vuex);
	StoreWorker.store = new Vuex.Store({modules: {}});
}
async function initFetot() {
	return new Vue({
		el: '#ftt',
		template: '<fetot-container :pageComponent="pageComponent"/>',
		data() {
			return {
				pageComponent: ''
			}
		},
		components: {
			'fetot-container': fetotContainer
		}
	})
}

/*** exports [end] ***/

export default { init: initFetot, initStore };