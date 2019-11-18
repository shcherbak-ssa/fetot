'use strict';

/*** imports [begin] ***/

import $localStorage from '../services/local-storage';
import OutputMessage from '../services/output-message';

/*** imports [end] ***/
/*** exports [begin] ***/

function connectionRequest() {
	const client = $localStorage.item.has('client') ? $localStorage.item('client') : false;
	const {type, connection} = currentPageOptions;
	
	const outputMessage = new OutputMessage({messageType: 'connection', type});
	outputMessage.set('client', client).set('connection', connection);
	
	return outputMessage.send();
}

/*** exports [end] ***/

export default connectionRequest;