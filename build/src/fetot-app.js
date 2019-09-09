import Vue from 'vue/dist/vue'
import './scss/main.scss'

import fetotApp from './main/fetot-app/fetot-app'

new Vue({
	el: '#fetot',
	template: '<fetot-app/>',
	components: { 'fetot-app': fetotApp }
});