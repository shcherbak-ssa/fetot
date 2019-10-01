'use strict';

let count = 0;

async function getRequestParse(request) {
	let {url, headers} = request;
	
	if( /[^a-z0-9./]/i.test(url) ) return Promise.reject('404');
	
	// switch( true ) {
	// 	case /\//.test(url):
	// 		let {headers: {cookie}} = request;
	// 		if( !cookie ) return 'valid'
	// }
	
	
	console.log(`request ${count += 1}`, url, headers);
}
async function postRequestParse(request) {

}

module.exports = {
	get: getRequestParse,
	post: postRequestParse
};