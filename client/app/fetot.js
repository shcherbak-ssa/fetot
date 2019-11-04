'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

import './scss/main.scss';
import fetotContainer from './view/fetot-container.vue';

import * as StoreWorkers from './components/store-workers';
import $localStorage from './components/storage/local-storage';
import OutputMessage from './components/workers/output-message'

/*** imports [end] ***/
/*** init [begin] ***/

Vue.use(Vuex);

window.addEventListener("unload", function() {
	let message = new OutputMessage({messageType: 'close'}).getMessage();
	navigator.sendBeacon('/', JSON.stringify(message));
}, false);

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetot({connectionOptions, }) {
	await connectionRequest(connectionOptions);
	await StoreWorkers.init();
}
async function runFetot(enterComponent) {
	return new Vue({
		el: '#ftt',
		store: StoreWorkers.store,
		template:
			`<fetot-container>
				<enter-component/>
			</fetot-container>`,
		components: {
			'fetot-container': fetotContainer,
			'enter-component': enterComponent
		}
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

async function connectionRequest({type, mode, $module}) {
	let client = $localStorage.item.has('client')
		? $localStorage.item('client') : false;
	
	let outputMessage = new OutputMessage({messageType: 'connection', type});
	outputMessage.set('client', client).set('connection', {mode, $module});
	
	let response = await outputMessage.send();
	OutputMessage.clientID = response.id;
}

/*** src [end] ***/

export default { init: initFetot, run: runFetot };