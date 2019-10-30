'use strict';

/*** imports [begin] ***/

import $fetch from '../../components/network/fetch'
import $localStorage from '../../components/services/local-storage';

import outputMessage from '../../components/network/output-message'

/*** imports [end] ***/
/*** init [begin] ***/

let client = $localStorage.item.has('client') ? $localStorage.item('client') : {};

/*** init [end] ***/
/*** exports [begin] ***/

async function connection({type, connection}) {
	let response = await $fetch.request({
		message: {
			type: 'connection',
			content: {
				type: type,
				data: {
					client: JSON.parse(client),
					connection
				}
			}
		}
	});
	
	outputMessage.template.id = response.id;
}

/*** exports [end] ***/

export default connection;