'use strict';

/*** imports [begin] ***/

import inputWorker from './workers/input';
import $localStorage from '$fetot-services/local-storage';

/*** imports [end] ***/
/*** exports [begin] ***/

async function saveClientAndGotoApp() {
	let email = inputWorker.getInput('email').state.value;
	let password = inputWorker.getInput('password').state.value;
	
	$localStorage.item.create('client-exist', true);
	$localStorage.item.create('client', {email, password});
	
	document.cookie = '$fetot={"client":true};path=/;max-age=60';
	
	location.reload();
}

/*** exports [end] ***/

export default saveClientAndGotoApp;