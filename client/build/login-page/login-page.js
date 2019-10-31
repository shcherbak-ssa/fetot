'use strict';

/*** imports [begin] ***/

import fetot from 'fetot';
import $localStorage from 'fetot-services-components/local-storage';

import initLoginPage from './components/init-login-page';
import loginPageView from './vue/login-page.vue';

/*** imports [end] ***/
/*** init [begin] ***/

controlClientExist()
	.then(($module) => {
		return {type: 'login', mode: '', $module}
	})
	.then((connectionOptions) => {
		return fetot.init(connectionOptions, loginPageView);
	})
	.then(() => {
		return initLoginPage()
	})
	.catch((err) => {
		console.log(err);
	});

/*** init [end] ***/
/*** src [begin] ***/

async function controlClientExist() {
	return $localStorage.item.has('client-exist') ? 'login' : 'sing-in'
}

/*** src [end] ***/