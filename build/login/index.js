'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import initApplication from './src/app-init';
import fetotLogin from './login.vue';

/*** imports [end] ***/
/*** init [begin] ***/

initApplication()
	.then((store) => {
		new Vue({
			el: '#login',
			data: { store },
			template: '<fetot-login :store="store"/>',
			components: { 'fetot-login': fetotLogin }
		})
	});

/*** init [end] ***/
