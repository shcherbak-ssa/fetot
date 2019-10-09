import Vue from 'vue/dist/vue';
import 'fetot-main-scss';

/*** store [begin] ***/

import storeWorker from 'fetot-workers/store-worker';
import storeInputs from './store/inputs.json';
import storeModule from './store/modules.json';

storeInputs = storeWorker.transformLikeMap(storeInputs);
storeModule = storeWorker.transformLikeMap(storeModule);

/*** store [end] ***/

import fetotLogin from './login.vue';

const fetotLoginComponent = new Vue({
	el: '#login',
	template: '<fetot-login/>',
	components: { 'fetot-login': fetotLogin }
});