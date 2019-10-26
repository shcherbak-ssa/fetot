'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetot from './src/fetot';
import fetotApp from './src/components/app.vue';

/*** imports [end] ***/
/*** init [begin] ***/

fetot.init()
	.then((options) => {
		new Vue({
			el: '#app',
			data() { return { options } },
			template: '<fetot-app :options="options"/>',
			components: { 'fetot-app': fetotApp }
		})
	})
	.catch((err) => {
		console.log(new Error(err))
	});

/*** init [end] ***/