import Vue from 'vue/dist/vue'
import 'fetot-main-scss'

import fetotLogin from './components/login/login.vue'
// import ws from 'fetot-js-modules/ws.js'

new Vue({
	el: '#login',
	template: '<fetot-login/>',
	components: { 'fetot-login': fetotLogin }
});

// ws.initWebSocketModule('ws://localhost:8080/');