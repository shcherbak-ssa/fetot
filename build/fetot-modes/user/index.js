import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetotUser from './user.vue';
import websocket from 'fetot-js-modules/websocket.js';

new Vue({
	el: '#user',
	template: '<fetot-user/>',
	components: { 'fetot-user': fetotUser }
});

websocket.init('login');