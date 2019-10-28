'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import '../UI/scss/main.scss';
import fttContainer from '../UI/vue/ftt-container.vue';

import connection from './src/connection';
import exitHandler from './src/exit-handler';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initFetot(connectionData, mainComponent) {
	await connection(connectionData);
	window.addEventListener('unload', exitHandler);
	
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

export default {
	init: initFetot
};