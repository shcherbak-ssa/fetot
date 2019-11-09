'use strict';

/*** imports [begin] ***/

import Fetot from '$fetot';

import connectionRequest from '$fetot-components/network/connection-request';
// import $localStorage from '$fetot-services/local-storage';
// import OutputMessage from '$fetot-services/output-message';
// import eventsEmitterWorker from '$fetot-events-emitter';

/*** imports [end] ***/
/*** init [begin] ***/

connectionRequest((response) => {
	console.log(response)
});

Fetot.init()
	.then((Vue) => {
		return initAppPage(Vue);
	})
	.then(() => {
		console.log('App page - success')
	})
	.catch((err) => {
		console.log(new Error(err))
	});


/*** init [end] ***/
/*** src [begin] ***/

async function initAppPage(VueModel) {}

/*** src [end] ***/