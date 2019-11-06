'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

import './scss/main.scss';
import fetotContainer from './view/fetot-container.vue';

import eventsEmitterWorker from './components/events-emitter';
import initFetotEvents from './components/init-fetot-events';
import StoreInterface from './components/store-interface';

import $localStorage from './components/services/local-storage';
import OutputMessage from './components/services/output-message'

/*** imports [end] ***/
/*** exports [begin] ***/

async function initFetot() {
	window.addEventListener("unload", function() {
		let message = new OutputMessage({messageType: 'close'}).getMessage();
		navigator.sendBeacon('/', JSON.stringify(message));
	}, false);
	
	await initFetotEvents();
	connectionRequest();
	
	Vue.use(Vuex);
	StoreInterface.Store = new Vuex.Store({modules: {}});
	
	return new Vue({
		el: '#ftt',
		data() {
			return { pageComponent: '' }
		},
		template: '<fetot-container :pageComponent="pageComponent"/>',
		components: { 'fetot-container': fetotContainer }
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function connectionRequest() {
	let client = $localStorage.item.has('client') ? $localStorage.item('client') : false;
	let {type, connection} = currentPageOptions;
	
	let outputMessage = new OutputMessage({messageType: 'connection', type});
	outputMessage.set('client', client).set('connection', connection);
	
	eventsEmitterWorker.getEmitter('fetot').emit('send-output-message', {
		outputMessage,
		handler(response) {
			OutputMessage.clientID = response.id;
		}
	})
}

/*** src [end] ***/

export default { init: initFetot };