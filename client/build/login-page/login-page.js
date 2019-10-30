'use strict';

/*** imports [begin] ***/

import fetot from 'fetot';

import $localStorage from 'fetot-services-components/local-storage';

/*** imports [end] ***/
/*** init [begin] ***/

controlClientExist()
	.then(($module) => {
		return {type: 'login', mode: 'login', $module}
	})
	.then((options) => {
		return fetot.preparingConnectionOptions(options);
	})
	.then((connectionOptions) => {
		return fetot.init(connectionOptions, {});
	})
	.catch((err) => {
		console.log(err);
	});

/*** init [end] ***/
/*** exports [begin] ***/

/*** exports [end] ***/
/*** src [begin] ***/

async function controlClientExist() {
	return $localStorage.item.has('client-exist') ? 'login' : 'sing-in'
}

/*** src [end] ***/

export default {};