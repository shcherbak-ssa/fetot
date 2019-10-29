'use strict';

/*** imports [begin] ***/

import $fetch from '../../components/network/fetch'
import outputMessage from '../../components/network/output-message'

/*** imports [end] ***/
/*** exports [begin] ***/

async function connection(content) {
	let response = await $fetch.request({
		message: { type: 'connection', content }
	});
	
	outputMessage.template.id = response.id;
}

/*** exports [end] ***/

export default connection;