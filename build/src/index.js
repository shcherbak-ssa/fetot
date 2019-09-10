import Vue from 'vue/dist/vue'
import './scss/main.scss'

import fetot from './components/fetot/fetot.vue'
import webSocket from './modules/ws';

new Vue({
	el: '#fetot',
	template: '<fetot/>',
	components: { fetot }
});

webSocket.initWebSocketModule('http://localhost:8080/');