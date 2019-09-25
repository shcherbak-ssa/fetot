import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetotLogin from './login.vue';
import websocket from 'fetot-js-modules/websocket.js';

new Vue({
	el: '#login',
	template: '<fetot-login/>',
	components: { 'fetot-login': fetotLogin }
});

websocket.init('login');