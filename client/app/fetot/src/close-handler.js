'use strict';

/*** imports [begin] ***/

import $fetch from '../../components/network/fetch'

/*** imports [end] ***/
/*** exports [begin] ***/

function closeHandler() {
	return $fetch.request({
		message: {
			type: 'close'
		},
		options: {
			keepalive: true
		}
	})
}

/*** exports [end] ***/

export default closeHandler;