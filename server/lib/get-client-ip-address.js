'use strict';

/*** imports [begin] ***/

const requestIP = require('request-ip');

/*** imports [end] ***/
/*** exports [begin] ***/

function getClientIpAddress(request) {
	return requestIP.getClientIp(request);
}

/*** exports [end] ***/

module.exports = getClientIpAddress;