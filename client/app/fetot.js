'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';

import './view/scss/main.scss';
import fetotContainer from './view/vue/fetot-container.vue';

import $localStorage from './components/services/local-storage';
import OutputMessage from './components/workers/output-message'

/*** imports [end] ***/
/*** init [begin] ***/

window.addEventListener("unload", function() {
	let message = new OutputMessage({messageType: 'close'}).getMessage();
	navigator.sendBeacon('/', JSON.stringify(message));
}, false);

const client = $localStorage.item.has('client') ? $localStorage.item('client') : false;

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetot(connectionOptions, mainComponent) {
	await connectionRequest(connectionOptions);
	
	return new Vue({
		el: '#ftt',
		template:
			`<fetot-container>
				<main-component/>
			</fetot-container>`,
		components: {
			'fetot-container': fetotContainer,
			'main-component': mainComponent
		}
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

async function connectionRequest({type, mode, $module}) {
	let outputMessage = new OutputMessage({messageType: 'connection', type});
	outputMessage.set('client', client).set('connection', {mode, $module});
	
	let response = await outputMessage.send();
	OutputMessage.clientID = response.id;
}

/*** src [end] ***/

export default { init: initFetot };