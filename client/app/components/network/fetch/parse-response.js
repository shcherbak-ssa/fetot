'use strict';

/*** exports [begin] ***/

async function parseResponse(response) {
	let [, contentType] = response.headers.get('Content-Type').split('/');
	if( contentType === 'json' ) return response.json();
	
	console.log(new Error('invalid content-type'));
	// switch( contentType ) {
	// 	case 'json': return response.json()
	// }
}

/*** exports [end] ***/

export default parseResponse;