import Vue from 'vue/dist/vue'
import './scss/index.scss'

import Fetot from './app/Fetot.vue'

// Vue.config.productionTip = false;

new Vue({
	el: '#fetot',
	template: '<Fetot/>',
	components: { Fetot }
});