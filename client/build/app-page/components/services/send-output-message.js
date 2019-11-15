'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';

/*** imports [end] ***/
/*** exports [begin] ***/

function sendOutputMessageService(workerType) {
	return (type, message) => {
		const outputMessage = new OutputMessage({type: `${workerType}/${type}`});
		Object.entries(message).forEach((item) => outputMessage.set(...item));
		
		return outputMessage.send();
	}
}

/*** exports [end] ***/

export default sendOutputMessageService;