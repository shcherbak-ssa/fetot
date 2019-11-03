'use strict';

/*** exports [begin] ***/

async function $fetch(options) {
	let response = await fetch('/', {method: 'POST', ...options});
	return await parseResponse(response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseResponse(response) {
	if( response.headers.get('Content-Type') === null ) return 0;
	
	let [, contentType] = response.headers.get('Content-Type').split('/');
	if( contentType === 'json' ) return response.json();
	
	console.log(new Error('invalid content-type'));
	// switch( contentType ) {
	// 	case 'json': return response.json()
	// }
}

/*** src [end] ***/

export default $fetch;