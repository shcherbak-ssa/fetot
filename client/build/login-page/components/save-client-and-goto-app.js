'use strict';

/*** imports [begin] ***/

import inputWorker from './workers/input';
import $localStorage from '$fetot-services/local-storage';
import $cookie from '$fetot-services/cookie';

/*** imports [end] ***/
/*** exports [begin] ***/

async function saveClientAndGotoApp() {
	let email = inputWorker.getInput('email').state.value;
	let password = inputWorker.getInput('password').state.value;
	
	$localStorage.item.create('client-exist', true);
	$localStorage.item.create('client', {email, password});
	
	$cookie.set('$fetot', { client: true }, { path: '/', expires: 14 });
	
	location.reload();
}

/*** exports [end] ***/

export default saveClientAndGotoApp;