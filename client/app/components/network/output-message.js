'use strict';

/*** exports [begin] ***/

const outputMessageTemplate = {
	type: '', // 'connection', 'exit', 'client', 'mode', 'module'
	client: '',
	content: {
		type: '',
		data: {}
	}
};
const outputHeadersTemplate = {
	'Content-Type': 'application/json'
};

function getOutputMessage(message) {
	return JSON.stringify( Object.assign({}, outputMessageTemplate, message) )
}
function getOutputHeaders(headers) {
	return Object.assign({}, outputHeadersTemplate, headers);
}

/*** exports [end] ***/

export default {
	headers: outputHeadersTemplate,
	template: outputMessageTemplate,
	getMessage: getOutputMessage,
	getHeaders: getOutputHeaders
};