import Vue from 'vue/dist/vue'
import './scss/index.scss'

import fetot from './app/fetot.vue'

// Vue.config.productionTip = false;

new Vue({
	el: '#fetot',
	template: '<fetot/>',
	components: { fetot }
});