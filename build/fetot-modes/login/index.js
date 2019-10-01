import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

import fetotLogin from './login.vue';

new Vue({
	el: '#login',
	template: '<fetot-login/>',
	components: { 'fetot-login': fetotLogin }
});