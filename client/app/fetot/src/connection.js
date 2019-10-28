'use strict';

/*** imports [begin] ***/

import $fetch from '../../components/network/fetch'
import outputMessage from '../../components/network/output-message'

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function connection(data) {
	let response = await $fetch.request({
		message: {
			type: 'connection',
			content: { data }
		}
	});
	
	outputMessage.template.id = response.id;
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default connection;