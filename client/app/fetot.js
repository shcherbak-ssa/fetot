'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

import './scss/main.scss';
import fetotContainer from './view/fetot-container.vue';

import initFetotEvents from './components/init-fetot-events';
import StoreInterface from './components/store-interface';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initFetot() {
	await initFetotEvents();
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

export default { init: initFetot };