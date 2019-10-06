'use strict';

import fetchRequest from 'fetot-js-modules/fetch-request';

const message = {
	url: 'confirm-email/login/message',
	body: '',
	type: 'json'
};

async function confirmEmailWorker(input) {
	let {value} = input;
	if( value.length < 6 ) return;
	
	if( /[^\d]/.test(value) ) input.error = 'Confirmation code can contain only the numbers';
	
	let response = await fetchRequest.post( Object.assign(message, {body: {'confirm-code': value}}) );
	console.log(response);
}

export default {
	worker: confirmEmailWorker
}