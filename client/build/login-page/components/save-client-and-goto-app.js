'use strict';

/*** imports [begin] ***/

import $localStorage from 'fetot-services/local-storage';

/*** imports [end] ***/
/*** exports [begin] ***/

async function saveClientAndGotoApp({email, password}) {
	$localStorage.item.create('client', {
		email: email.value,
		password: password.value
	});
	document.cookie = '$fetot={client:true};path=/;max-age=60';
	
	location.reload();
}

/*** exports [end] ***/

export default saveClientAndGotoApp;