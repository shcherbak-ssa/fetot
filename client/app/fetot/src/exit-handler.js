'use strict';

/*** imports [begin] ***/

import $fetch from '../../components/network/fetch'

/*** imports [end] ***/
/*** exports [begin] ***/

async function exitHandler() {
	return $fetch.request({
		message: {
			type: 'exit'
		},
		options: {
			keepalive: true
		}
	})
}

/*** exports [end] ***/

export default exitHandler;