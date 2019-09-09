import Vue from 'vue/dist/vue'
import './scss/main.scss'

import fetotLogin from './main/fetot-login/fetot-login.vue'

new Vue({
	el: '#fetot',
	template: '<fetot-login/>',
	components: { 'fetot-login': fetotLogin }
});