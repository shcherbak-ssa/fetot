'use strict';

/*** imports [begin] ***/

import parseResponse from './parse-response';
import sendRequest from './send-request';

/*** imports [end] ***/
/*** exports [begin] ***/

async function request(options) {
	let response = await sendRequest(options);
	return await parseResponse(response);
}

/*** exports [end] ***/

export default { request };