'use strict';

/*** imports [begin] ***/

import {loginPageStore} from './store/login-page-store';
import $localStorage from '$fetot-services/local-storage';

/*** imports [end] ***/
/*** exports [begin] ***/

async function saveClientAndGotoApp() {
	let email = loginPageStore.getters.getInput('email').value;
	let password = loginPageStore.getters.getInput('password').value;
	
	$localStorage.item.create('client', {email, password});
	document.cookie = '$fetot={client:true};path=/;max-age=60';
	
	location.reload();
}

/*** exports [end] ***/

export default saveClientAndGotoApp;