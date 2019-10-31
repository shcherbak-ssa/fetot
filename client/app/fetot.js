'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';

import './view/scss/main.scss';
import fttContainer from './view/vue/ftt-container.vue';

import $fetch from './components/network/fetch'
import $localStorage from './components/services/local-storage';
import outputMessage from './components/network/output-message'

/*** imports [end] ***/
/*** init [begin] ***/

const client = $localStorage.item.has('client') ? $localStorage.item('client') : false;
window.addEventListener("unload", function() {
	// let message = outputMessage.getMessage({type: 'close'});
	// let blob = new Blob([message], { type: 'application/json' });

	navigator.sendBeacon('/', outputMessage.getMessage({type: 'close'}));
}, false);

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetot(connectionOptions, mainComponent) {
	connectionOptions = await preparingConnectionOptions(connectionOptions);
	await connectionRequest(connectionOptions);
	
	return new Vue({
		el: '#ftt',
		template:
			`<ftt-container>
				<main-component/>
			</ftt-container>`,
		components: {
			'ftt-container': fttContainer,
			'main-component': mainComponent
		}
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

async function preparingConnectionOptions({type, mode, $module}) {
	return { type, connection: { mode, $module } }
}
async function connectionRequest({type, connection}) {
	let response = await $fetch.request({
		message: {
			type: 'connection',
			content: {
				type: type,
				data: {
					client: client ? JSON.parse(client) : {},
					connection
				}
			}
		}
	});
	
	outputMessage.template.id = response.id;
}

/*** src [end] ***/

export default {
	init: initFetot,
	preparingConnectionOptions
};