'use strict';

/*** exports [begin] ***/

function configWorker(config) {
	let cloneConfig = Object.assign({}, config);
	cloneConfig.response = new Proxy(cloneConfig.response, {
		get(target, prop) {
			return (responseModule, message = false) => {
				let currentMessage = Object.assign({}, target[prop]);
				if( message ) Object.assign(currentMessage.message, message);
				
				return {
					message: currentMessage,
					response: responseModule
				}
			}
		}
	});
	
	return cloneConfig;
}

/*** exports [end] ***/

module.exports = configWorker;