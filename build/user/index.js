import Vue from 'vue/dist/vue'
import 'fetot-main-scss'

import fetotUser from './components/user.vue'
import websocket from 'fetot-js-modules/websocket.js'

new Vue({
	el: '#user',
	template: '<fetot-user/>',
	components: { 'fetot-user': fetotUser }
});

websocket.initWebSocketModule('ws://localhost:8080/', 'login');
websocket.initMessageHandler();