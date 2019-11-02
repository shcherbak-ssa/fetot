'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';
import loginPageVueComponent from '../vue/login-page.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initLoginPage($module) {
	let moduleStore = await import(`../store/${$module}-store`);
	let {module: moduleData, inputs: moduleInputs} = moduleStore.default;
	
	Store.collection.create('current-module').setObject(moduleData);
	Store.collection.create('inputs').setObject(moduleInputs);
	
	return {
		connectionOptions: {type: 'login', mode: '', $module},
		mainComponent: loginPageVueComponent
	}
}

/*** exports [end] ***/

export default initLoginPage;