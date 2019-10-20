'use strict';

/*** exports [begin] ***/

function configWorker(config) {
	config.response = new Proxy(config.response, {
		get(target, prop) {
			return (responseModule, message = false) => {
				let currentMessage = target[prop];
				if( message ) Object.assign(currentMessage.message, message);
				
				return {
					message: currentMessage,
					response: responseModule
				}
			}
		}
	});
	
	return config;
}

/*** exports [end] ***/

module.exports = configWorker;