'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import initApplication from './src/app-init';
import fetotLogin from './login.vue';

/*** imports [end] ***/
/*** init [begin] ***/

initApplication()
	.then((options) => {
		new Vue({
			el: '#login',
			data: { options },
			template: '<fetot-login :options="options"/>',
			components: { 'fetot-login': fetotLogin }
		})
	});

/*** init [end] ***/
