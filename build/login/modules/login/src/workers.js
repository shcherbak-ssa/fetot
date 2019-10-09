'use strict';

/*** imports [begin] ***/

import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/

const outputMessage = {
	content: {
		type: 'check-client',
		data: {}
	}
};

/*** exports [begin] ***/

async function submitDataWorker(inputs) {
	let formData = new FormData();
	
	let email = inputs.email.value,
		password = inputs.password.value;
	
	formData.set('email', email);
	formData.set('password', password);
	
	outputMessage.content.data = formData;
	let response = await fetchRequest.post({
		message: outputMessage
	});
	
	await parseServerResponse(response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse({type, message}) {
	switch( type ) {
		case 'error':
			console.log(message);
			break;
		case 'success':
			alert('Login success')
	}
}

/*** src [end] ***/

export default new Map( Object.entries({
	'submit-data': submitDataWorker
}) );