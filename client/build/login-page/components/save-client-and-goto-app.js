'use strict';

/*** imports [begin] ***/

import $localStorage from 'fetot-storage/local-storage';

/*** imports [end] ***/
/*** exports [begin] ***/

async function saveClientAndGotoApp({email, password}) {
	$localStorage.item.create('client', {email, password});
	document.cookie = '$fetot={client:true};path=/;max-age=60';
	
	location.reload();
}

/*** exports [end] ***/

export default saveClientAndGotoApp;