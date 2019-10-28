'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function parseConnectionMessage(options) {
	switch( options.message.content.type ) {
		case 'login':
			return await isLoginPageConnection(options);
		case 'app':
			return await isAppPageConnection(options);
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

async function isLoginPageConnection(options) {

}
async function isAppPageConnection(options) {

}
async function isFirstClientConnection() {

}
async function isNotFirstClientConnection() {

}

/*** src [end] ***/

module.exports = parseConnectionMessage;