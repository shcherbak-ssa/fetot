'use strict';

/*** exports [begin] ***/

const outputMessageTemplate = {
	id: '',
	type: '', // 'connection', 'close', 'message'
	content: {
		type: '',
		data: {}
	}
};
const outputHeadersTemplate = {
	'Content-Type': 'application/json'
};

function getOutputMessage({type, content = {}}) {
	content = Object.assign({}, outputMessageTemplate.content, content);
	return JSON.stringify( Object.assign({}, outputMessageTemplate, {type, content}) )
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