'use strict';

/*** imports [begin] ***/

import fetot from 'fetot';
import $localStorage from 'fetot-services/local-storage';

import initLoginPage from './components/init-login-page';

/*** imports [end] ***/
/*** init [begin] ***/

controlClientExist()
	.then(($module) => {
		return initLoginPage($module);
	})
	.then(({connectionOptions, mainComponent}) => {
		return fetot.init(connectionOptions, mainComponent);
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