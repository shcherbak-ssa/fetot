'use strict';

/*** imports [begin] ***/

import sendRequest from './send-request';
import parseResponse from './parse-response';

/*** imports [end] ***/
/*** exports [begin] ***/

async function request(options) {
	let response = await sendRequest(options);
	return await parseResponse(response);
}

/*** exports [end] ***/

export default { request };