import Vue from 'vue/dist/vue'
import './scss/main.scss'

import fetot from './components/fetot/fetot.vue'

new Vue({
	el: '#fetot',
	template: '<fetot/>',
	components: { fetot }
});