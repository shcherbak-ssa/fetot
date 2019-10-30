'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import '../UI/scss/main.scss';
import fttContainer from '../UI/vue/ftt-container.vue';

import connection from './src/connection';
import closeHandler from './src/close-handler';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initFetot(connectionOptions, mainComponent) {
	await connection(connectionOptions);
	window.addEventListener('unload', closeHandler);
	
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
async function preparingConnectionOptions({type, mode, $module}) {
	return { type, connection: { mode, $module } }
}

/*** exports [end] ***/

export default {
	init: initFetot,
	preparingConnectionOptions
};