'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services-components/store';
import loginPageVueComponent from '../vue/login-page.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

async function initLoginPage($module) {
	let moduleStore = await import(`../store/${$module}-store.json`);
	let {module: moduleData, inputs: moduleInputs} = moduleStore.default;
	
	Store.collection.create('current-module').setObject(moduleData);
	Store.collection.create('inputs').setObject(moduleInputs);
	
	console.log(Store.collection('current-module'));
	
	return {
		connectionOptions: {type: 'login', mode: '', $module},
		mainComponent: loginPageVueComponent
	}
}

/*** exports [end] ***/

export default initLoginPage;